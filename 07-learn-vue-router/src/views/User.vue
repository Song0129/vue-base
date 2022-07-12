<template>
	<div>
		user:{{ $route.params.id }}

		<div>
			<router-view></router-view>
		</div>
		<div>
			<button @click="back">back</button>
		</div>
	</div>
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
		// beforeRouteEnter(to, from, next) {
		// 	console.log("user enter");
		// 	next(vm => {});
		// },
		methods: {
			back() {
				// 编程式导航
				// this.$router.back();
				this.$router.go(-1);
			},
		},
	};
</script>

<style lang="scss" scoped></style>
