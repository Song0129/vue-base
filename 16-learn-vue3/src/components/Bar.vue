<template>
	<div>count:{{ count }}</div>
	<div>age:{{ age }}</div>
	<button @click="plusCount">plusCount</button>
	<button @click="plusAge">plusAge</button>
	<button @click="stopWatch">stop watch</button>
</template>

<script>
	import { ref, watchEffect } from "vue";
	export default {
		setup() {
			const count = ref(0);
			const age = ref(18);

			function plusCount() {
				count.value++;
			}

			function plusAge() {
				age.value++;
			}

			const stop = watchEffect(onInvalidate => {
				onInvalidate(() => {
					// 1. 重新触发 watch 时
					// 2. 组件销毁时
					console.log("reset");
					// window.removeEventListener("keydown", this.xxx);
				});
				// get -> 依赖收集
				// 可以观察多个值
				console.log("watchEffect", count.value + age.value);
				// window.addEventListener("keydown", this.xxx);
				// set
			});

			const stopWatch = () => {
				stop && stop();
			};

			// watch vs watchEffect
			// 1. watch可以明确的知道观察的是谁
			// 2. watch可以获取到之前的值
			// 3. watch是懒惰的
			// watchEffect 可以直接观察多个值  watch需要用数组
			// watch([count,age], (newVal, oldVal) => {});

			return {
				count,
				plusCount,
				stopWatch,
				age,
				plusAge,
			};
		},
	};
</script>

<style lang="less" scoped></style>
