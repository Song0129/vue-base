<template>
	<div>
		<input type="text" @keyup.enter="addTodo" v-model="newTodo" />
		<div>
			<ul>
				<li v-for="todo in todoList" :key="todo.id">
					<TodoItem :todo="todo" @removeTodo="removeTodo" @completeTodo="completeTodo"></TodoItem>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import TodoItem from "./TodoItem.vue";
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
		components: {
			TodoItem,
		},
		methods: {
			addTodo() {
				this.todoList.push({
					id: createId(),
					text: this.newTodo,
					state: "action",
				});
				this.newTodo = "";
			},

			removeTodo(id) {
				this.todoList = this.todoList.filter(todo => todo.id !== id);
			},

			completeTodo(id) {
				console.log(id);
				// todo
				const todo = this.todoList.find(todo => todo.id === id);
				if (todo) {
					todo.state = todo.state === "completed" ? "action" : "completed";
				}
			},
		},
	};
</script>

<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	ul,
	li {
		list-style: none;
	}
</style>
