import { reactive, h } from "./core/index.js";
window.h = h;
export default {
	// template -> render
	render(context) {
		// ui
		// 1. 每次删除所有节点 -> 优化
		// 2. 跨平台的问题
		// const element = document.createElement("div");
		// const text = document.createTextNode("hello,");
		// const text1 = document.createTextNode(context.obj.count);
		// element.append(text);
		// element.append(text1);
		// return element;
		// return h("div", { id: "box", class: "test" }, [h("p", {}, "hello"), h("p", {}, String(context.obj.count))]);
		// return h("div", { id: "box", class: "test" }, "hello");
		// 1. test tag
		// return h(context.obj.tag, {}, "1");
		// 2. test props add/update
		// return h("div", context.obj.props, "1");
		// 3. test props remove
		// return h("div", context.obj.props, "1");
		// 1. test oldChildren -> string | newChildren -> string
		// return h("div", {}, String(context.obj.count));
		// 2. test oldChildren -> array | newChildren -> string
		// return h("div", {}, context.obj.children);
		// 3. test oldChildren -> string | newChildren -> children
		// return h("div", {}, context.obj.children);
		// 4. test oldChildren -> array | newChildren -> children
		//  4.1 new > old  | new < old
		return h("div", {}, context.obj.children);
	},
	setup() {
		const obj = reactive({
			count: 1,
			tag: "div",
			props: { a: "a", b: "b" },
			children: [h("p", {}, "1"), h("p", {}, "2")],
			// children: "a",
		});

		window.obj = obj;

		return {
			obj,
		};
	},
};
