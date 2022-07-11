import VueRouter from "vue-router";
import Vue from "vue";

import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Zhangsan from "../views/Zhangsan.vue";

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
		// 路由优先级问题：谁先配置，谁的优先级最高
		{
			path: "/user/:id",
			component: User,
		},
		{
			path: "/user/zhangsan",
			component: Zhangsan,
		},
	],
});

export default router;
