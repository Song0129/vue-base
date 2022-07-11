import VueRouter from "vue-router";
import Vue from "vue";

import Home from "../views/Home.vue";
import User from "../views/User.vue";
// import Zhangsan from "../views/Zhangsan.vue";
import Details from "../views/Details.vue";

import Foo from "../views/Foo.vue";
import Bar from "../views/Bar.vue";

console.log(VueRouter);

// use -> koa
// koa.use() -> 添加
// 插件

// Vue.component("router-view") 会全局注册该组件
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: "/",
			component: Home,
			children: [
				{
					// 别名：相对路径 -> "jia"
					// alias: "new-foo",
					alias: ["new-foo", "one-foo", "two-foo"],
					path: "foo",
					component: Foo,
				},
				// {
				// path: "new-foo",
				// 重定向：相对路径 -> "foo"
				// redirect: "foo",
				// redirect(to) {
				// 	console.log(to);
				// 	// return "foo";
				// 	return to.query.to;
				// },
				// },
			],
		},

		// {
		// 	path: "/jia",
		// 	// 重定向：/ -> 绝对路径
		// 	redirect: "/home",
		// },

		// {
		// 	// 别名：相对路径 -> "/jia"
		// 	// 访问地址 "/jia" -> 实际组件为 Home
		// 	// 与重定向 redirect 不同的是地址栏不发生变化
		//  // 别名可以有多个 定义为数组 ["new-foo","one-foo","two-foo"]
		// 	alias: "/jia",
		// 	path: "/home",
		// 	// 命名视图 -> 兄弟关系
		// 	// 类似 slot 关系

		// 	// /home -> component
		// 	// component: Home,
		// 	// /home -> 多个 component
		// 	components: {
		// 		default: Home,
		// 		one: Foo,
		// 		two: Bar,
		// 	},
		// },

		// 路由优先级问题：谁先配置，谁的优先级最高
		// {
		// 	path: "/user/zhangsan",
		// 	component: Zhangsan,
		// },
		{
			path: "/new-user/:id",
			redirect: "/user/:id",
		},
		{
			path: "/user/:id",
			component: User,
			children: [
				// 嵌套路由 -> 父子关系
				// 子路由 path 不应带"/"
				// 不应该多层嵌套  一般为一层或两层
				{
					path: "foo",
					component: Foo,
				},
				{
					path: "bar",
					component: Bar,
				},
			],
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
		// catch all redirect
		{
			path: "*",
			redirect: "/",
		},
	],
});

export default router;
