import Vue from "vue";
import Vuex from "vuex";
import { fetchLogin } from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: localStorage.getItem("token") || "",
	},
	mutations: {
		login(state, payload) {
			state.token = payload.token;
			console.log(state);
			localStorage.setItem("token", payload.token);
		},
	},
	actions: {
		async login({ commit }, payload) {
			const { username, password } = payload;
			const { data } = await fetchLogin({ username, password });
			console.log(data);
			if (data.data.token) {
				commit("login", { token: data.data.token });
			}
		},
	},
	modules: {},
});
