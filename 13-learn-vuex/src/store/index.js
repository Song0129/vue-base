import Vue from "vue";
import Vuex from "vuex";

// 1. 使用插件
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		username: "tom",
		age: 18,
		users: [
			{ username: "li", age: 18 },
			{ username: "wang", age: 20 },
		],
	},

	mutations: {
		changeUserName(state, { username }) {
			console.log("change user name", username);

			// setTimeout(() => {
			// 	state.username = username;
			// }, 5000);

			state.username = username;
		},

		changeUserAge(state, { age }) {
			console.log("change user age", age);

			// setTimeout(() => {
			// 	state.age = age;
			// }, 2000);

			state.age = age;
		},
	},

	actions: {
		changeUserName({ commit }, payload) {
			console.log(commit);
			console.log(payload);

			setTimeout(() => {
				commit("changeUserName", payload);
			}, 2000);

			// await fetch api
			// await xxx
		},
		// changeUserName({ commit }, payload) {
		// 	console.log(commit);
		// 	console.log(payload);
		// 	return new Promise((resolve, reject) => {
		// 		setTimeout(() => {
		// 			commit("changeUserName", payload);
		// 			resolve();
		// 		}, 2000);
		// 	});

		// 	// await fetch api
		// 	// await xxx
		// },
	},

	// 全局的计算属性
	getters: {
		tenYearsOld(state) {
			return state.age + 10;
		},

		findUserByAge(state) {
			// age
			// 不建议这样使用  不可以缓存
			return age => {
				return state.users.filter(user => {
					return user.age === age;
				});
			};
		},
	},
});

export default store;
