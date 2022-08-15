<template>
	<container>
		<Map></Map>
		<Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
		<Enemy v-for="(enemy, index) in enemys" :key="index" :x="enemy.x" :y="enemy.y"></Enemy>
	</container>
</template>

<script>
	import Map from "../components/Map.vue";
	import Plane, { usePlane } from "../components/Plane.vue";
	import Enemy, { useEnemy } from "../components/Enemy.vue";
	export default {
		components: {
			Map,
			Plane,
			Enemy,
		},
		setup() {
			const { planeInfo } = usePlane();
			const { enemys } = useEnemy();

			return {
				planeInfo,
				enemys,
			};
		},
	};
</script>

<style scoped></style>
