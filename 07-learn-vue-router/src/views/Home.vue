<template>
	<div>
		Home123

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		beforeRouteEnter(to, from, next) {
			console.log("before-router-enter");
			next();
		},
		// eslint-disable-next-line no-unused-vars
		beforeRouteUpdate(to, from, next) {
			console.log("before-router-update");
		},
		beforeRouteLeave(to, from, next) {
			console.log("before-router-leave");
			next();
		},
	};
</script>

<style lang="scss" scoped></style>
