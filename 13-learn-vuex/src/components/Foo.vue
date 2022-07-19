<template>
	<div>
		foo
		<p>username:{{ username }}</p>
		<p>age:{{ age }}</p>

		<p>10年后的年龄：{{ tenYearsOld }}</p>

		<div>
			<button @click="changeUserName">changeUserName</button>
			<button @click="changeUserAge">changeUserAge</button>
			<button @click="asyncChangeUsername">async - ChangeUsername</button>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";

	// const states = mapState(["username", "age"]);
	// console.log(states);

	export default {
		data() {
			return {
				// string ->
				// username: this.$store.state.username,
				// age: this.$store.state.age,
			};
		},
		computed: {
			...mapState(["username", "age"]),
			tenYearsOld() {
				// return this.age + 10;
				// return this.$store.state.age + 10;
				return this.$store.getters.tenYearsOld;
			},
			// username() {
			// 	return this.$store.state.username;
			// },
			// age() {
			// 	return this.$store.state.age;
			// },
		},
		methods: {
			changeUserName() {
				console.log("changeUserName");
				// this.$store.state.username = "jerry";
				this.$store.commit("changeUserName", { username: "jerry" });
			},
			changeUserAge() {
				console.log("changeUserAge");
				// this.$store.state.age = 22;
				this.$store.commit("changeUserAge", { age: 22 });
			},

			async asyncChangeUsername() {
				await this.$store.dispatch("changeUserName", { username: "async - jerry" });

				console.log("change user name ok");
			},
			// asyncChangeUsername() {
			// 	const a = this.$store.dispatch("changeUserName", { username: "async - jerry" }).then(() => {
			// 		console.log("change user name ok");
			// 	});
			// 	console.log("a", a);
			// },
		},
	};
</script>

<style lang="scss" scoped></style>
