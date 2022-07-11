<template>
	<div>user:{{ $route.params.id }}</div>
</template>

<script>
	export default {
		created() {
			// 路由对象
			// router 给我们注入的
			console.log(this.$route);
		},
	};
</script>

<style lang="scss" scoped></style>
