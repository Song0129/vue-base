<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<Foo title="heihei"></Foo>
	<Bar v-if="showBar"></Bar>
	<button @click="hideBar">hideBar</button>
	<Baz v-if="showBar"></Baz>
</template>

<script>
	// import HelloWorld from "./components/HelloWorld.vue";
	import Foo from "./components/Foo.vue";
	import Bar from "./components/Bar.vue";
	import Baz from "./components/Baz.vue";
	import { ref, provide } from "vue";
	export default {
		name: "App",
		components: {
			// HelloWorld,
			Foo,
			Bar,
			Baz,
		},
		setup() {
			const showBar = ref(true);

			function hideBar() {
				showBar.value = false;
			}

			provide("app", "app.vue");
			const appRef = ref("app-ref.vue");
			provide("app-ref", appRef);

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
