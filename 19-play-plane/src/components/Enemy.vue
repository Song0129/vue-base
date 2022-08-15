<template>
	<container><sprite :texture="enemyImg"></sprite></container>
</template>

<script>
	import { reactive, onMounted, onUnmounted } from "vue";
	import enemyImg from "../assets/enemy.png";
	import { game } from "../game";
	import config from "../config";
	export default {
		setup() {
			return { enemyImg };
		},
	};

	export function useEnemy() {
		const enemys = new reactive([]);

		// 1s 创建一个飞机
		function createEnemy() {
			setInterval(() => {
				enemys.push({
					x: Math.floor(Math.random() * 500) + 50,
					y: -100,
					speed: typeof config.enemy.speed === "function" ? config.enemy.speed() : config.enemy.speed, // Math.floor(Math.random() * 10) + 5,
				});
			}, 1000);
		}

		function move() {
			function handleTicker() {
				enemys.forEach((enemy, index) => {
					enemy.y += enemy.speed;
					// 移除
					if (enemy.y > 1300) {
						enemys.splice(index, 1);
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

		createEnemy();
		move();

		return { enemys };
	}
</script>

<style scoped></style>
