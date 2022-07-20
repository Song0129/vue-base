import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
	state: { count: 1 },
	// 添加命名空间 不将getters、actions混入到全局
	// this.$store.getters["moduleA/doubleCount"];
	// this.$store.commit("moduleA/changeCount", 10);
	namespaced: true,
	mutations: {
		changeCount(state, payload) {
			console.log(payload);
			state.count = payload;
		},
	},
	getters: {
		doubleCount(state) {
			return state.count * 2;
		},
	},
	actions: {},
};

export default new Vuex.Store({
	state: {
		name: "root",
	},
	mutations: {},
	actions: {},
	modules: { moduleA },
});
