<template>
	<div :class="classes">
		{{ todo.text }}
		<button @click="removeTodo">X</button>
		<button @click="completeTodo">complete</button>
	</div>
</template>

<script>
	export default {
		props: ["todo"],
		computed: {
			classes() {
				return {
					completed: this.todo.state === "completed",
				};
			},
		},
		methods: {
			removeTodo() {
				this.$emit("removeTodo", this.todo.id);
			},
			completeTodo() {
				this.$emit("completeTodo", this.todo.id);
			},
		},
	};
</script>

<style lang="less" scoped>
	.completed {
		text-decoration: line-through;
	}
</style>
