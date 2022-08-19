// mini-vue

// 响应式概念
// reactivity

// vue3
// createApp(App).mount("#app");

// {
// 	tag: "div";
// 	props: {
// 		id: "test";
// 	}
// 	children: "hello";
// }

// div -> tag
const element = document.createElement("div");

// {id: test,class: test}
element.setAttribute("id", "tes0t");

// children
// string | []
element.append(document.createTextNode("hello"));
element.append(document.createTextNode("vue"));
