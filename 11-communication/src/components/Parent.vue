<template>
	<div>
		Parent
		<div>msg:{{ msg }}</div>
		<Child ref="child" title="this is parent title" @to-parent="handleToParent"></Child>
		<button @click="handleGetChildByRef">get child by ref</button>
	</div>
</template>

<script>
	import Child from "./Child.vue";
	export default {
		components: {
			Child,
		},
		data() {
			return {
				msg: "heihei",
			};
		},
		methods: {
			handleToParent() {
				console.log("to parent in parent");
				this.msg = "haha";
			},
			handleGetChildByRef() {
				console.log("get child by ref");
				console.log(this.$refs);
				this.$refs.child.setMsg("heiheihei - from parent");
			},
		},
	};
</script>

<style lang="less" scoped></style>
