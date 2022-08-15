<template>
	<container><sprite :texture="BulletImg"></sprite></container>
</template>

<script>
	import { reactive, onMounted, onUnmounted } from "vue";
	import BulletImg from "../assets/bullet.png";
	import { game } from "../game";
	import config from "../config";
	export default {
		setup() {
			return {
				BulletImg,
			};
		},
	};
	export function useBullet() {
		const bullets = reactive([]);

		function addBullet(position) {
			bullets.push({ ...position });
		}

		function move() {
			function handleTicker() {
				// console.log("bullet move");
				bullets.forEach((bullet, index) => {
					bullet.y -= config.plane.bullet.speed;
					if (bullet.y < -50) {
						bullets.splice(index, 1);
					}
				});
			}
			onMounted(() => {
				game.ticker.add(handleTicker);
			});
			onUnmounted(() => {
				game.ticker.remove(handleTicker);
			});
		}

		move();

		return {
			bullets,
			addBullet,
		};
	}
</script>

<style></style>
