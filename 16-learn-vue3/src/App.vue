<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<div>
		<p>mixin</p>
		x:{{ x }}---y:{{ y }}
	</div>
	<div>
		<p>component slot</p>
		<MouseMove v-slot="{ x, y }"> x:{{ x }}---y:{{ y }} </MouseMove>
	</div>
	<div>
		<p>composition api</p>
		x:{{ XX }}---y:{{ YY }}
	</div>
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
	import MouseMoveMixin from "./MouseMoveMixin.js";
	import MouseMove from "./components/MouseMove.vue";
	import { userMouseMove } from "./userMouseMove.js";

	export default {
		name: "App",
		// 1.多个mixin时  来源不清晰
		// 2.别的mixin导出同样的变量  变量重复、覆盖
		mixins: [MouseMoveMixin],
		components: {
			// HelloWorld,
			Foo,
			Bar,
			Baz,
			MouseMove,
		},
		setup() {
			const showBar = ref(true);

			function hideBar() {
				showBar.value = false;
			}

			provide("app", "app.vue");
			const appRef = ref("app-ref.vue");
			provide("app-ref", appRef);

			const { x: XX, y: YY } = userMouseMove();

			return {
				showBar,
				hideBar,
				XX,
				YY,
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
