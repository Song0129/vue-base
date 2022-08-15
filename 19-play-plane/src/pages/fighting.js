import { onMounted, onUnmounted } from "vue";
import { hitTestObject } from "../utils";
import { game } from "../game";

export function useFighting({
	enemys,
	bullets,
	planeInfo,
	gameover,
	distoryBullet,
	// distoryEnemy,
	hitEnemy,
}) {
	console.log(1);
	// fighting
	function handleTicker() {
		// 我方飞机和地方飞机的碰撞
		enemys.forEach(enemy => {
			if (hitTestObject(planeInfo, enemy)) {
				// gameover
				gameover();
			}
		});

		// 我方子弹和敌方飞机的碰撞
		enemys.forEach((enemy, eIndex) => {
			bullets.forEach((bullet, bIndex) => {
				if (hitTestObject(enemy, bullet)) {
					// 销毁
					// distoryEnemy(eIndex);
					hitEnemy(enemy, eIndex);
					distoryBullet(bIndex);
				}
			});
		});
	}

	onMounted(() => {
		game.ticker.add(handleTicker);
	});
	onUnmounted(() => {
		game.ticker.remove(handleTicker);
	});
}
