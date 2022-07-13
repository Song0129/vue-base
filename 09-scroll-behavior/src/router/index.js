import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		console.log(to, from);
		console.log(savedPosition);

		// savedPositon
		// 通过浏览器后退按键操作页面时  保存页面的滚动值
		// 再次通过前进按键进去页面后 恢复页面滚动

		// if (savedPosition) {
		// 	return savedPosition;
		// }

		// 可以指定滚动值
		// return {
		// 	x: 0,
		// 	y: 200,
		// };

		// 可以指定锚点
		// return {
		// 	selector: ".anchor2",
		// };

		// console.log(to.hash);
		// 使用hash值来指定锚点
		if (to.hash) {
			return {
				selector: to.hash,
				// offset: {
				// 	y: 100,
				// },
				behavior: "smooth",
			};
		}
	},
});

export default router;
