<template>
	<container>
		<StartPage v-if="currentPage === 'StartPage'" @change-page="handleChangePage"></StartPage>
		<GameMap v-else-if="currentPage === 'GamePage'" @change-page="handleChangePage"></GameMap>
		<EndPage v-else-if="currentPage === 'EndPage'" @change-page="handleChangePage"></EndPage>
	</container>
</template>

<script>
	import { ref } from "vue";
	import StartPage from "./pages/StartPage.vue";
	import GameMap from "./pages/GamePage.vue";
	import EndPage from "./pages/EndPage.vue";
	export default {
		name: "App",
		components: {
			StartPage,
			GameMap,
			EndPage,
		},
		setup() {
			const currentPage = ref("StartPage");
			// const currentPage = ref("GamePage");
			// const currentPage = ref("EndPage");

			const handleChangePage = pageName => {
				currentPage.value = pageName;
			};
			return {
				currentPage,
				handleChangePage,
			};
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
