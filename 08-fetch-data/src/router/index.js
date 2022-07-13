import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
// 在 router 中如何 fetch 后端的data
// 1. 导航完成后获取数据 -> created 里面
// 2. 导航完成前获取数据 -> beforeRouteEnter 里面

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/foo/:id",
		name: "Foo",
		component: () => import(/* webpackChunkName: "foo" */ "../views/Foo.vue"),
	},
	{
		path: "/bar/:id",
		name: "Bar",
		component: () => import(/* webpackChunkName: "bar" */ "../views/Bar.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
