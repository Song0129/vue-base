<template>
	<div>
		bar
		<p>10年后的年龄：{{ tenYearsOld }}</p>
		<p>18岁的user：{{ findUserByAge(18) }}</p>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		computed: {
			...mapGetters(["tenYearsOld", "findUserByAge"]),
			// tenYearsOld() {
			// 	// return this.$store.state.age + 10;
			// 	return this.$store.getters.tenYearsOld;
			// },
		},
	};
</script>

<style lang="scss" scoped></style>
