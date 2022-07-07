<template>
	<div>
		{{ users }}
		<button id="btn" @click="getUser">get</button>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				users: [],
			};
		},
		methods: {
			async getUser() {
				const { data } = await axios.get("./users");
				this.users = data;
			},
		},
	};
</script>

<style lang="scss" scoped></style>
