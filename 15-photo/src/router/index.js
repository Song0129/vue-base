import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Photo from "../views/Photo.vue";

Vue.use(VueRouter);

const routes = [
	// {
	// 	path: "/",
	// 	name: "Home",
	// 	component: Home,
	// },
	{
		path: "/login",
		name: "Login",
		component: Login,
	},

	{
		path: "/photo",
		name: "Photo",
		component: Photo,
	},
	{
		path: "/details/:id",
		name: "Details",
		component: () => import(/* webpackChunkName: "details" */ "../views/Details.vue"),
		props: true,
	},
	// {
	// 	path: "/about",
	// 	name: "About",
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	// },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
