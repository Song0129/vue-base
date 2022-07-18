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
			state.username = username;
		},

		changeUserAge(state, { age }) {
			console.log("change user age", age);
			state.age = age;
		},
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
