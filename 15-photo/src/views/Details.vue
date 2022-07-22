<template>
	<div>
		<h1>Details</h1>
		{{ id }}
		<img :src="item.imgUrl" alt="" />
		<p>{{ item.name }}</p>
		<button @click="back">back</button>
	</div>
</template>

<script>
	import { fetchGetphoto } from "../api/index";
	export default {
		// props: ["item"],
		props: ["id"],
		created() {
			this.getPhoto();
		},
		data() {
			return {
				item: {},
			};
		},
		methods: {
			back() {
				this.$router.back();
			},
			async getPhoto() {
				const { data } = await fetchGetphoto(this.id);
				console.log(data);
				this.item = data.data;
			},
		},
	};
</script>

<style lang="less" scoped>
	img {
		max-width: 1200px;
		max-height: 800px;
	}
</style>
