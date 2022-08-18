// import { ref, effect } from "./node_modules/@vue/reactivity/dist/reactivity.esm-browser.js";

// const a = ref(10);

// let b = 0;

// effect(() => {
// 	// 触发get  收集依赖
// 	b = a.value + 10;
// 	console.log(b);
// });

// // set操作  触发依赖
// a.value = 20;

import { Dep, effectWatch, reactive } from "./core/index.js";

// const a = new Dep(10);
// let b = 0;

// effectWatch(() => {
// 	b = a.value + 10;
// 	console.log(b);
// });

// a.value = 20;

// {} -> reactive

// const user = reactive({ age: 10 });

// let nextAge = 0;
// effectWatch(() => {
// 	nextAge = user.age + 1;
// 	console.log(nextAge);
// });

// user.age++;

// const context = reactive({
// 	count: 0,
// });

// window.obj = obj;
// effectWatch(() => {
// 	// ui
// });

const App = {
	// template -> render
	render(context) {
		// ui
		effeoctWatch(() => {
			// 1. 每次删除所有节点 -> 优化
			// 2. 跨平台的问题
			document.querySelector("#app").textContent = "";
			const element = document.createElement("div");
			const text = document.createTextNode("hello,");
			const text1 = document.createTextNode(context.obj.count);
			element.append(text);
			element.append(text1);
			document.querySelector("#app").append(element);
		});
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

App.render(App.setup());
