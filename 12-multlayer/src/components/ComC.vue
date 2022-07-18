<template>
	<div>
		ComC title: {{ title }}
		<button @click="getComA">get ComA</button>
		<button @click="handleInit">init</button>
	</div>
</template>

<script>
	import Bus from "../bus";
	export default {
		props: ["title"],
		// inject: ["title", "ComA"],
		methods: {
			handleInit() {
				Bus.$emit("init", "Bus: from comA");
			},
			getComA() {
				console.log(this.ComA);
				this.ComA.setMsg("from ComC");
				this.ComA.addChild(this);
			},
		},
	};
</script>

<style lang="less" scoped></style>
