import { reactive } from "./core/index.js";
export default {
	// template -> render
	render(context) {
		// ui
		// 1. 每次删除所有节点 -> 优化
		// 2. 跨平台的问题

		const element = document.createElement("div");
		const text = document.createTextNode("hello,");
		const text1 = document.createTextNode(context.obj.count);
		element.append(text);
		element.append(text1);

		return element;
	},
	setup() {
		const obj = reactive({
			count: 1,
		});

		window.obj = obj;

		return {
			obj,
		};
	},
};
