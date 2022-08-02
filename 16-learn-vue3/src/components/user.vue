<template>
	<div>user</div>
</template>

<script>
	import { ref, watch, computed } from "vue";
	import userOne from "./userOne";

	function userTwo() {
		const two = ref(1);
		// eslint-disable-next-line no-unused-vars
		const handleOne = () => {
			two.value + 1;
		};
		watch(two, () => {});
		// eslint-disable-next-line no-unused-vars
		const plusOne = computed(() => two.value + 1);
		return { two };
	}
	export default {
		setup() {
			const one = userOne();
			const two = userTwo();
			// const one = ref(1);
			// const handleOne = () => {
			// 	one.value + 1;
			// };
			// watch(one, () => {});
			// const plusOne = computed(() => one.value + 1);
			// return { one };
			return { one, two };
		},
	};
	// export default {
	// 	data() {
	// 		return {
	// 			one: "1",
	// 			two: "2",
	// 			three: "2",
	// 		};
	// 	},
	// 	watch: {
	// 		one() {},
	// 		two() {},
	// 		three() {},
	// 	},
	// 	computed: {
	// 		plusOne() {
	// 			return this.one;
	// 		},
	// 		plusTwo() {
	// 			return this.two;
	// 		},
	// 		plusThree() {
	// 			return this.three;
	// 		},
	// 	},
	// 	methods: {
	// 		handleOne() {
	// 			console.log(this.one);
	// 		},
	// 		handleTwo() {
	// 			console.log(this.one);
	// 		},
	// 		handleThree() {
	// 			console.log(this.one);
	// 		},
	// 	},
	// };
</script>

<style lang="less" scoped></style>
