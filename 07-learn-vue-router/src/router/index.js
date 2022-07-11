import VueRouter from "vue-router";
import Vue from "vue";

import Home from "../views/Home.vue";
import User from "../views/User.vue";

console.log(VueRouter);

// use -> koa
// koa.use() -> 添加
// 插件

// Vue.component("router-view") 会全局注册该组件
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: "/home",
			component: Home,
		},
		{
			path: "/user/:id",
			component: User,
		},
	],
});

export default router;
