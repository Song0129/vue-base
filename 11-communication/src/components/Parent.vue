<template>
	<div>
		Parent
		<div>msg:{{ msg }}</div>
		<Child ref="child" title="this is parent title" @to-parent="handleToParent"></Child>
		<Child ref="child" title="this is parent title" @to-parent="handleToParent"></Child>

		<input type="text" ref="input" />

		<button @click="handleGetChildByRef">get child by ref</button>
		<button @click="focus">focus</button>
		<button @click="getChildren">get children</button>
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
			focus() {
				console.log(this.$refs);
				// refs -> element
				this.$refs.input.focus();
			},
			getChildren() {
				console.log(this.$children);
				const firstComponent = this.$children[0];
				firstComponent.setMsg("fisrt heihei");
			},
		},
	};
</script>

<style lang="less" scoped></style>
