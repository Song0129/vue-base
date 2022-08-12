<template>
	<container>
		<sprite :texture="StartPage"></sprite>
		<sprite x="226" y="514" :texture="StartBtn" @click="startGame" :interactive="true"></sprite>
	</container>
</template>

<script>
	import StartPage from "../assets/start_page.jpg";
	import StartBtn from "../assets/startBtn.png";
	export default {
		setup(props, { emit }) {
			const startGame = () => {
				console.log("start - game");
				emit("change-page", "GamePage");
			};
			return { StartPage, StartBtn, startGame };
		},
	};
</script>

<style scoped></style>
