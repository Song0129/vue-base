<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<div>count: {{ count }}</div>
		<div>doubleCount: {{ doubleCount }}</div>
		<div><button @click="changeCount">changeCount</button></div>
	</div>
</template>

<script>
	// import { mapState, mapGetters } from "vuex";

	import { createNamespacedHelpers } from "vuex";
	const { mapState, mapGetters } = createNamespacedHelpers("moduleA");
	export default {
		name: "App",
		computed: {
			// 传统方式
			// count() {
			// 	return this.$store.state.moduleA.count;
			// },
			// doubleCount() {
			// 	return this.$store.getters["moduleA/doubleCount"];
			// },

			// map
			// ...mapState("moduleA", ["count"]),
			// ...mapGetters("moduleA", ["doubleCount"]),

			// createNamespacedHelpers
			...mapState(["count"]),
			...mapGetters(["doubleCount"]),
		},
		mounted() {
			console.log(this.$store.state);
		},
		methods: {
			changeCount() {
				this.$store.commit("moduleA/changeCount", 10);
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
