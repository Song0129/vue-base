<template>
	<div>
		{{ count }}
		<button id="btn" @click="count++">click</button>
		{{ inputValue }}
		<input id="ipt" type="text" v-model="inputValue" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 1,
				inputValue: "hello",
			};
		},
	};
</script>

<style lang="scss" scoped></style>
