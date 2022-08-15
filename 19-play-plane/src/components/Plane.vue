<template>
	<container><sprite :texture="PlaneImg"></sprite></container>
</template>

<script>
	import { reactive, onMounted, onUnmounted } from "vue";
	import PlaneImg from "../assets/plane.png";
	export default {
		setup() {
			return {
				PlaneImg,
			};
		},
	};

	export function usePlane() {
		const planeInfo = reactive({
			x: 250,
			y: 600,
		});

		// move
		function move() {
			const speed = 10;
			function handleMove(e) {
				console.log(e.code);
				switch (e.code) {
					case "ArrowUp":
						planeInfo.y -= speed;
						break;
					case "ArrowDown":
						planeInfo.y += speed;
						break;
					case "ArrowLeft":
						planeInfo.x -= speed;
						break;
					case "ArrowRight":
						planeInfo.x += speed;
						break;
				}
			}

			onMounted(() => {
				window.addEventListener("keyup", handleMove);
			});

			onUnmounted(() => {
				window.removeEventListener("keyup", handleMove);
			});
		}
		move();

		return {
			planeInfo,
		};
	}
</script>

<style scoped></style>
