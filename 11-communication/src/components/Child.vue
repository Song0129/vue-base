<template>
	<div>
		Child
		<div>title:{{ title }}---childMsg: {{ childMsg }}</div>
		<button @click="toParent">To Parent</button>
		<button @click="getParent">Get Parent</button>
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
			getParent() {
				console.log(this.$parent);
				this.$parent.focus();
			},
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
