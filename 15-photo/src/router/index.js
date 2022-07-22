import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Photo from "../views/Photo.vue";
import store from "../store";

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
		meta: {
			isAuth: true,
		},
	},
	{
		path: "/details/:id",
		name: "Details",
		component: () => import(/* webpackChunkName: "details" */ "../views/Details.vue"),
		props: true,
		meta: {
			isAuth: true,
		},
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

router.beforeEach((to, from, next) => {
	// token
	if (to.meta.isAuth) {
		const token = store.state.token;
		console.log(token);
		if (token) {
			next();
		} else {
			next({ name: "Login" });
		}
	} else {
		next();
	}
});

export default router;
