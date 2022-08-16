<template>
	<container><sprite :texture="PlaneImg"></sprite></container>
</template>

<script>
	import { reactive, onMounted, onUnmounted } from "vue";
	import PlaneImg from "../assets/plane.png";
	import { planeMove } from "./planeMove";
	export default {
		setup() {
			return {
				PlaneImg,
			};
		},
	};

	export function usePlane({ onAttack }) {
		const planeInfo = reactive({
			x: 250,
			y: 600,
			width: 258,
			height: 364,
		});

		function attack() {
			function handleAttack(e) {
				if (e.code === "Space") {
					// console.log("attack");
					// console.log({
					// 	x: planeInfo.x,
					// 	y: planeInfo.y,
					// });
					onAttack && onAttack({ x: planeInfo.x + 100, y: planeInfo.y });
				}
			}
			onMounted(() => {
				window.addEventListener("keyup", handleAttack);
			});

			onUnmounted(() => {
				window.removeEventListener("keyup", handleAttack);
			});
		}

		// move
		planeMove(planeInfo);
		attack();

		return {
			planeInfo,
		};
	}
</script>

<style scoped></style>
