<template>
	<div class="foo">
		This is a foo page
		<div v-if="loading">loading</div>
		<div v-if="error">error</div>
		<div v-if="!loading && !error">{{ post.title }}-{{ post.body }}</div>
	</div>
</template>
<script>
	import { apiPost } from "../api";
	export default {
		data() {
			return {
				post: {},
				loading: false,
				error: false,
			};
		},
		created() {
			this.fetchData();
		},
		watch: { $route: "fetchData" },
		methods: {
			fetchData() {
				this.loading = true;
				this.error = false;
				this.post = {};
				apiPost(this.$route.params.id)
					.then(post => {
						console.log(post);
						this.post = post;
						this.loading = false;
					})
					.catch(() => {
						console.log("catch", this.error);
						this.loading = false;
						this.error = true;
					});
			},
		},
	};
</script>
