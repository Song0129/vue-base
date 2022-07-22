import axios from "axios";
import store from "../store";
import router from "../router";
import Vue from "vue";

const myAxios = axios.create({});

myAxios.interceptors.request.use(config => {
	const token = store.state.token;
	if (token) {
		config.headers.authorization = "Bearer " + token;
	}
	return config;
});

myAxios.interceptors.response.use(
	res => res,
	err => {
		console.log(err.response.status);
		if (err.response.status === 401) {
			Vue.prototype.$alert("请先去登录！", "提示", {
				confirmButtonText: "确定",
				callback: () => {
					router.push({
						name: "Login",
					});
				},
			});
		}
	}
);

export default myAxios;
