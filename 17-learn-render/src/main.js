import { createApp } from "vue";
import App from "./App.vue";

// template -> render -> vnode(element) -> mountElment -> element -> append()

console.log(App);
console.log(App.render());

// type children props

createApp(App).mount("#app");
