// 自定义渲染器

function createElement(tag) {
	return document.createElement(tag);
}

function patchProps(el, key, prevVal, nextVal) {
	el.setAttribute(key, nextVal);
}

function insert(el, parent) {
	parent.append(el);
}

function createTextNode(text) {
	return document.createTextNode(text);
}

// 挂载
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
}
