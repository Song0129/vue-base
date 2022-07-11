<template>
	<div>user:{{ $route.params.id }}</div>
</template>

<script>
	export default {
		created() {
			// 路由对象
			// router 给我们注入的
			// user.id -> fetch api -> user
			console.log(this.$route);
			console.log(`fecth user api id: ${this.$route.params.id}`);
		},
		watch: {
			$route() {
				console.log(`watch user api id: ${this.$route.params.id}`);
			},
		},
		beforeRouteUpdate() {
			// vue-router 提供的钩子函数
			console.log(`before-route-update user api id: ${this.$route.params.id}`);
		},
	};
</script>

<style lang="scss" scoped></style>
