<template>
	<div class="bar">
		This is a bar page
		<div>{{ post.title }}-{{ post.body }}</div>
	</div>
</template>

<script>
	import { apiPost } from "../api";
	export default {
		beforeRouteEnter(to, from, next) {
			console.log("beforeRouteEnter", to);
			apiPost(to.params.id).then(post => {
				next(vm => {
					console.log(post);
					vm.post = post;
					vm.loading = false;
				});
			});
		},
		data() {
			return {
				post: {},
				loading: false,
				error: false,
			};
		},
	};
</script>

<style lang="less" scoped></style>
