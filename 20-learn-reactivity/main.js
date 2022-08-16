import { ref, reactive, effect } from "./node_modules/@vue/reactivity/dist/reactivity.esm-browser.js";

// 核心：收集依赖  触发依赖
// console.log(ref);

// const a = ref(10);

// 更新 a 的值  b 未发生更新

// 通过旧方法可完成对 b 的更新
// 计算属性
// watch
// watchEffect
// let b;
// effect(() => {
// 	b = a.value + 10;
// 	console.log(b);
// });

// a.value = 20;

// view -> 响应式数据

// const view = content => {
// 	document.querySelector("#app").textContent = ``;

// 	const div = document.createElement("div");
// 	div.textContent = content.a.value;

// 	document.querySelector("#app").append(div);
// };

// const content = {
// 	a: ref(10),
// };

// effect(() => {
// 	view(content);
// });

// // 更新值

// window.content = content;

const App = {
	render(content) {
		console.log(content);
		effect(() => {
			document.querySelector("#app").textContent = ``;
			const div = document.createElement("div");
			div.textContent = content.a.value;
			document.querySelector("#app").append(div);
		});
	},
	setup() {
		const a = ref(10);

		window.a = a;
		return { a };
	},
};

App.render(App.setup());
