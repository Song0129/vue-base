<template>
	<div>
		<input type="text" @keyup.enter="addTodo" v-model="newTodo" />
		<div>
			<ul>
				<li v-for="item in todoList" :key="item.id">{{ item.text }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	let id = 1;
	function createId() {
		return id++;
	}
	export default {
		data() {
			return {
				newTodo: "",
				todoList: [],
			};
		},
		methods: {
			addTodo() {
				console.log(this.newTodo);
				this.todoList.push({
					id: createId(),
					text: this.newTodo,
				});
				this.newTodo = "";
			},
		},
	};
</script>

<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
	}
</style>
