// 自定义渲染器

function createElement(tag) {
	return document.createElement(tag);
}

function patchProps(el, key, prevVal, nextVal) {
	if (nextVal === null) {
		el.removeAttribute(key);
	} else {
		el.setAttribute(key, nextVal);
	}
}

function insert(el, parent) {
	parent.append(el);
}

function createTextNode(text) {
	return document.createTextNode(text);
}

// 挂载 vdom -> dom
export function mountElement(vnode, container) {
	const { tag, props, children } = vnode;
	// tag
	const el = (vnode.el = createElement(tag));

	// props
	for (const key in props) {
		const val = props[key];
		patchProps(el, key, null, val);
	}

	// children
	if (typeof children === "string") {
		insert(createTextNode(children), el);
	} else if (Array.isArray(children)) {
		children.forEach(v => {
			mountElement(v, el);
		});
	}
	// insert
	insert(el, container);
}

// 更新

// n1 -> oldVNode
// n2 -> newvNode
export function diff(n1, n2) {
	console.log("diff", n1, n2);

	if (n1.tag !== n2.tag) {
		// 1. tag
		n1.el.replaceWith(createElement(n2.tag));
	} else {
		// 2. props
		//  2.1. new {a,b} -> old {a} -> add b
		//  2.2. new {a} -> old {a,b} -> remove b
		const { props: oldProps } = n1;
		const { props: newProps } = n2;
		const el = (n2.el = n1.el);
		if (newProps) {
			Object.keys(newProps).forEach(key => {
				const newVal = newProps[key];
				const oldVal = oldProps[key];

				if (newVal !== oldVal) {
					patchProps(el, key, oldVal, newVal);
				}
			});
		}

		if (oldProps) {
			Object.keys(oldProps).forEach(key => {
				if (!(key in newProps)) {
					patchProps(el, key, oldProps[key], null);
				}
			});
		}

		// 3. children
		//  3.1 newChildren -> string (oldChildren -> string | oldChildren -> array)
		//  3.2 newChildren -> array (oldChildren -> string | oldChildren -> array)

		const { children: oldChildren } = n1;
		const { children: newChildren } = n2;
		if (typeof newChildren === "string") {
			if (typeof oldChildren === "string") {
				if (newChildren !== oldChildren) {
					el.textContent = newChildren;
				}
			} else if (Array.isArray(oldChildren)) {
				el.textContent = newChildren;
			}
		} else if (Array.isArray(newChildren)) {
			if (typeof oldChildren === "string") {
				el.innerText = "";
				newChildren.forEach(v => {
					mountElement(v, el);
				});
			} else if (Array.isArray(oldChildren)) {
				// 暴力对比 无法处理 old -> [a,b,c] | new -> [a,c,b]
				// 1. 公共部分依次对比
				const length = Math.min(oldChildren.length, newChildren.length);
				for (let i = 0; i < length; i++) {
					const newVNode = newChildren[i];
					const oldVNode = oldChildren[i];
					diff(oldVNode, newVNode);
				}
				// 2. new > old -> add  [a,b] -> [a,b,c]
				if (newChildren.length > oldChildren.length) {
					for (let i = length; i < newChildren.length; i++) {
						const VNode = newChildren[i];
						mountElement(VNode, el);
					}
				}
				// 3. new < old -> remove  [a,b,c] -> [a,b]
				if (newChildren.length < oldChildren.length) {
					for (let i = length; i < oldChildren.length; i++) {
						const oldVNode = oldChildren[i];
						el.removeChild(oldVNode.el);
					}
				}
			}
		}
	}
}
