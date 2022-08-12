// import { createApp, createRenderer } from "vue";
import { createRenderer } from "vue";
import App from "./App.vue";

import { Application, Graphics } from "pixi.js";

// template -> render -> vnode(element) -> mountElment -> element -> append()

// console.log(App);
// console.log(App.render());

// type children props
const game = new Application({
	width: 500,
	height: 500,
});

document.body.append(game.view);

const renderer = createRenderer({
	createElement(type) {
		console.log(type);
		// const element = document.createElement(type);
		// return element;
		let element;
		if (type === "rect") {
			element = new Graphics();
			element.beginFill(0xff0000);
			element.drawRect(0, 0, 50, 50);
			element.endFill();
		} else if (type === "circle") {
			element = new Graphics();
			element.beginFill(0xffff00);
			element.drawCircle(25, 25, 25);
			element.endFill();
		}
		return element;
	},
	insert(el, parent) {
		console.log(parent);
		// console.log(el);
		// console.log(parent);
		// parent.append(el);
		parent.addChild(el);
	},
	patchProp(el, key, prevValue, nextValue) {
		console.log(el, key, prevValue, nextValue);
		// if (key === "x") el.x = nextValue;
		// if (key === "y") el.y = nextValue;
		el[key] = nextValue;
	},
	// setElementText(node, text) {
	// 	console.log(node);
	// 	console.log(text);
	// 	node.append(document.createTextNode(text));
	// },
});
console.log(renderer);

renderer.createApp(App).mount(game.stage);

// createApp(App).mount("#app");
