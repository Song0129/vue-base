<template>
	<div>
		ComC title: {{ title }}
		<button @click="getComA">get ComA</button>
	</div>
</template>

<script>
	export default {
		// props: ["title"],
		inject: ["title", "ComA"],
		methods: {
			getComA() {
				console.log(this.ComA);
				this.ComA.setMsg("from ComC");
				this.ComA.addChild(this);
			},
		},
	};
</script>

<style lang="less" scoped></style>
