<template>
	<div>
		Child
		<div>title:{{ title }}---childMsg: {{ childMsg }}</div>
		<button @click="toParent">To Parent</button>
	</div>
</template>

<script>
	export default {
		// input
		props: ["title"],
		data() {
			return {
				childMsg: "",
			};
		},
		methods: {
			toParent() {
				this.$emit("to-parent");
			},
			setMsg(val) {
				this.childMsg = val;
			},
		},
	};
</script>

<style lang="less" scoped></style>
