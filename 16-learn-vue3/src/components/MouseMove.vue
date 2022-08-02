<template>
	<div>
		<slot :x="x" :y="y"></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				x: 0,
				y: 0,
			};
		},
		mounted() {
			window.addEventListener("mousemove", this.handleMousemove);
		},
		unmounted() {
			window.removeEventListener("mousemove", this.handleMousemove);
		},
		methods: {
			handleMousemove(e) {
				this.x = e.pageX;
				this.y = e.pageY;
			},
		},
	};
</script>

<style lang="less" scoped></style>
