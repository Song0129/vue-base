<template>
	<div>
		baz
		<div>count:{{ count }} <button @click="handlePlus">click</button></div>
	</div>
</template>

<script>
	import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
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

			return {
				count,
				handlePlus,
			};
		},
	};
</script>

<style lang="less" scoped></style>
