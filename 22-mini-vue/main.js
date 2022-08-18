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

const user = reactive({ age: 10 });

let nextAge = 0;
effectWatch(() => {
	nextAge = user.age + 1;
	console.log(nextAge);
});

user.age++;
