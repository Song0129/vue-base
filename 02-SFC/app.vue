<template>
	<div>
		<div>hi,app</div>
		<p>my vue-cli-service-global</p>
		<p>count: {{ count }}</p>
		<button @click="handleClick">add</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 1,
			};
		},
		methods: {
			handleClick() {
				console.log("button click");
				this.count++;
			},
		},
	};
</script>

<style lang="scss" scoped></style>
