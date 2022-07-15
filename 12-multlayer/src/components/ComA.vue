<template>
	<div>
		ComA msg: {{ msg }}
		<ComB :title="$attrs.title" @a="handleA" @b="handleB"></ComB>
		<button @click="getChildren">get children</button>
	</div>
</template>

<script>
	import ComB from "./ComB.vue";
	export default {
		inheritAttrs: false,
		components: {
			ComB,
		},
		// props: ["title"],
		data() {
			return {
				msg: "",
				componentChildren: [],
			};
		},
		provide() {
			return {
				title: "from ComA",
				ComA: this,
			};
		},
		mounted() {
			console.log("ComA", this.$attrs);
		},
		methods: {
			handleA() {
				console.log("AAAAAAAAAA");
			},
			handleB() {
				console.log("BBBBBBBBBB");
			},
			setMsg(val) {
				this.msg = val;
			},
			addChild(child) {
				this.componentChildren.push(child);
			},
			getChildren() {
				console.log(this.componentChildren);
			},
		},
	};
</script>

<style lang="less" scoped></style>
