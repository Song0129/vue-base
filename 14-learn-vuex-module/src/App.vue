<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<div>count: {{ count }}</div>
		<div>doubleCount: {{ doubleCount }}</div>
		<div><button @click="changeCount">changeCount</button></div>
	</div>
</template>

<script>
	export default {
		name: "App",
		computed: {
			count() {
				return this.$store.state.moduleA.count;
			},
			doubleCount() {
				return this.$store.getters["moduleA/doubleCount"];
			},
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
