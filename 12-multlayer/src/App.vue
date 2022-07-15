<template>
	<div id="app">
		<ComA title="from app"></ComA>
		<Button disabled></Button>
	</div>
</template>

<script>
	import ComA from "./components/ComA.vue";
	import Button from "./components/Button.vue";
	export default {
		components: {
			ComA,
			Button,
		},
	};
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		padding-top: 100px;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
