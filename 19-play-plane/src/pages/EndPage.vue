<template>
	<container>
		<sprite :texture="EndPage"></sprite>
		<sprite x="226" y="514" :texture="ReStartBtn" @click="startGame" :interactive="true"></sprite>
	</container>
</template>

<script>
	import EndPage from "../assets/end_page.jpg";
	import ReStartBtn from "../assets/restartBtn.png";
	export default {
		setup(props, { emit }) {
			const startGame = () => {
				console.log("start - game");
				emit("change-page", "GamePage");
			};
			return { EndPage, ReStartBtn, startGame };
		},
	};
</script>

<style scoped></style>
