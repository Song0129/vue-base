import Vue from "vue";
import Vuex from "vuex";
import { fetchLogin } from "../api";
import { fetchGetphotos } from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token: localStorage.getItem("token") || "",
		photos: [],
	},
	mutations: {
		login(state, payload) {
			state.token = payload.token;
			localStorage.setItem("token", payload.token);
		},
		updatePhotos(state, payload) {
			state.photos = payload.photos;
			// localStorage.setItem("token", payload.token);
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
		async updatePhotos({ commit }) {
			const { data } = await fetchGetphotos();
			commit("updatePhotos", {
				photos: data.data.photos,
			});
		},
	},
	getters: {
		getPhotoById(state) {
			return id => {
				return state.photos.find(photo => photo.id === id);
			};
		},
	},
	modules: {},
});
