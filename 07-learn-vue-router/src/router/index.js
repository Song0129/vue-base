import VueRouter from "vue-router";
import Vue from "vue";

import Home from "../views/Home.vue";
import User from "../views/User.vue";
// import Zhangsan from "../views/Zhangsan.vue";
import Details from "../views/Details.vue";

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
		// {
		// 	path: "/user/zhangsan",
		// 	component: Zhangsan,
		// },
		{
			path: "/user/:id",
			component: User,
		},
		{
			path: "/details/:id",
			component: Details,
			// 组件中使用 $route 会使之与其对应的路由形成高度耦合，从而使组件只能在某些特定的 url 上使用，显示灵活性
			// 使用 props 可避免该问题，进行组件间传参
			// 取值：boolean 将参数直接作为组件的 props 来使用
			// props: true,
			// 取值：object 固定对象传参，命名需与组件内一致
			// props: {
			// 	id: "heihei",
			// },
			// 取值：function 可接收 route 参数 函数内可对数据进行处理后 再抛出
			props(route) {
				return { id: route.params.id };
			},
		},
	],
});

export default router;
