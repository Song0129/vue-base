<template>
	<div>
		Home

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		beforeRouteLeave(to, from, next) {
			console.log("app leave to", to);
			console.log("app leave from", from);
			next();
		},
	};
</script>

<style lang="scss" scoped></style>
