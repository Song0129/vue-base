<template>
	<div>
		ComB

		<ComC :title="$attrs.title"></ComC>

		<button @click="getListeners">get listeners</button>
	</div>
</template>

<script>
	import ComC from "./ComC.vue";
	export default {
		inheritAttrs: false,
		components: {
			ComC,
		},
		// props: ["title"],
		mounted() {
			console.log("ComB", this.$attrs);
		},

		methods: {
			getListeners() {
				console.log(this.$listeners);
				this.$listeners.a();
			},
		},
	};
</script>

<style lang="less" scoped></style>
