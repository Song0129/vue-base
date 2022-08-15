import { createRenderer } from "vue";
import { Container, Sprite, Texture } from "pixi.js";

const renderer = createRenderer({
	createElement(type) {
		// console.log("createElement--->>", type);
		let element;
		switch (type) {
			case "container":
				element = new Container();
				break;
			case "sprite":
				element = new Sprite();
				break;
			default:
				break;
		}
		return element;
	},
	insert(el, parent) {
		// console.log("insert--->>", el, parent);
		if (el) {
			parent.addChild(el);
		}
	},
	patchProp(el, key, pervValue, nextValue) {
		// console.log("patchProp--->>", key);
		switch (key) {
			case "texture":
				el.texture = Texture.from(nextValue);
				break;
			case "onClick":
				el.on("pointertap", nextValue);
				console.log(nextValue);
				break;
			default:
				el[key] = nextValue;
				break;
		}
	},
	parentNode(node) {
		return node.parent;
	},
	remove(el) {
		if (el && el.parent) {
			el.parent.removeChild(el);
		}
	},
	createText() {},
	createComment() {},
	nextSibling() {},
});

export function createApp(rootComponent) {
	return renderer.createApp(rootComponent);
}
