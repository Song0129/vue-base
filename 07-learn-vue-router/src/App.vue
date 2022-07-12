<template>
	<div id="app">
		<div>
			<!-- <a href="/user/1">To User</a> -->
			<!-- <router-link to="/user/1">To User</router-link> -->
			<!-- <router-link :to="{ name: 'User', params: { id: 1 } }">To User</router-link> -->
			<button @click="handleToUser">To User</button>
		</div>
		<router-view></router-view>
		<!-- <router-view name="one"></router-view>
		<router-view name="two"></router-view> -->
	</div>
</template>

<script>
	// import HelloWorld from "./components/HelloWorld.vue";

	export default {
		name: "App",
		components: {
			// HelloWorld,
		},
		methods: {
			handleToUser() {
				// 编程式导航
				console.log(this.$router);
				console.log(this.$route);
				// push
				// this.$router.push("/user/1");

				this.$router.push({
					name: "User",
					params: {
						id: 1,
					},
				});

				// this.$router.push(() => {
				// 	console.log("push function");
				// 	return "/user/1";
				// });

				// replace
				// this.$router.replace("/user/1");
			},
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
