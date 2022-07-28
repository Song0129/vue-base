<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<Foo title="heihei"></Foo>
	<Bar v-if="showBar"></Bar>
	<button @click="hideBar">hideBar</button>
</template>

<script>
	// import HelloWorld from "./components/HelloWorld.vue";
	import Foo from "./components/Foo.vue";
	import Bar from "./components/Bar.vue";
	import { ref } from "vue";
	export default {
		name: "App",
		components: {
			// HelloWorld,
			Foo,
			Bar,
		},
		setup() {
			const showBar = ref(true);

			function hideBar() {
				showBar.value = false;
			}

			return {
				showBar,
				hideBar,
			};
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
