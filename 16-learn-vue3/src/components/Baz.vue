<template>
	<div>
		baz
		<div>count:{{ count }} <button @click="handlePlus">click</button></div>
		<div>app: {{ app }} <button @click="changeApp">change app</button>appRef: {{ appRef }} <button @click="changeAppRef">change app ref</button></div>
	</div>
</template>

<script>
	import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, inject } from "vue";
	export default {
		setup() {
			const count = ref(0);

			function handlePlus() {
				count.value++;
			}

			function handleKeyDown(e) {
				console.log(e);
			}

			onBeforeMount(() => {
				console.log("before mount");
			});

			onMounted(() => {
				console.log("mounted");
				window.addEventListener("keydown", handleKeyDown);
			});

			onBeforeUpdate(() => {
				console.log("before update");
			});

			onUpdated(() => {
				console.log("updated");
			});

			onBeforeUnmount(() => {
				console.log("before unmount");
			});

			onUnmounted(() => {
				console.log("mounted");
				window.removeEventListener("keydown", handleKeyDown);
			});

			// 接收的什么值  就是什么值 不会转为响应式
			let app = inject("app", "app.vue - baz.vue");
			console.log("inject", app);

			function changeApp() {
				app = "change app";
				console.log("changeApp:", app);
			}

			const appRef = inject("app-ref");
			console.log("inject - ref", appRef, appRef.value);

			function changeAppRef() {
				appRef.value = "change app ref";
				console.log("changeAppRef:", appRef.value);
			}

			return {
				count,
				handlePlus,
				app,
				changeApp,
				appRef,
				changeAppRef,
			};
		},
	};
</script>

<style lang="less" scoped></style>
