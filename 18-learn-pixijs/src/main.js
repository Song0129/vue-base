// import * as PIXI from "pixi.js";

import { Application, Graphics, Sprite, Texture, Text, Container } from "pixi.js";
import logo from "./assets/logo.png";

console.log(Application);
const game = new Application({
	width: 500,
	height: 500,
});

const box1 = new Container();
game.stage.addChild(box1);

const rect = new Graphics();
rect.beginFill(0xff0000);
rect.drawRect(0, 0, 50, 50);
rect.endFill();

rect.interactive = true;
rect.on("pointertap", () => {
	console.log("click");
	game.ticker.remove(handleTicker);
});

game.stage.addChild(rect);

const img = new Sprite();
// img -> url
img.texture = Texture.from(logo);
box1.addChild(img);

const text = new Text("hello pixijs", { fill: "red" });
box1.addChild(text);

box1.x = 100;
box1.y = 100;

function handleTicker() {
	console.log("add");
	box1.x++;
}

game.ticker.add(handleTicker);

document.body.append(game.view);
