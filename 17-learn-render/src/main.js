// import { createApp, createRenderer } from "vue";
import { createRenderer } from "vue";
import App from "./App.vue";

// template -> render -> vnode(element) -> mountElment -> element -> append()

// console.log(App);
// console.log(App.render());

// type children props

const renderer = createRenderer({
	createElement(type) {
		console.log(type);
		const element = document.createElement(type);
		return element;
	},
	insert(el, parent) {
		console.log(el);
		console.log(parent);

		parent.append(el);
	},
	setElementText(node, text) {
		console.log(node);
		console.log(text);
		node.append(document.createTextNode(text));
	},
});
console.log(renderer);

renderer.createApp(App).mount(document.querySelector("#app"));

// createApp(App).mount("#app");
