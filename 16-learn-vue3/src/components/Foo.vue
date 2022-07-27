<template>
	<div>
		<div>{{ count }}<button @click="handleCount">click</button></div>
	</div>
	<div>
		<div>{{ user.name }}--{{ user.age }}<button @click="handleChangeAge">click</button></div>
	</div>
</template>

<script>
	import { ref, reactive } from "vue";
	export default {
		setup() {
			// count
			// 1 false "" -> 值类型  无法判断变化
			let count = ref(1);
			console.log(count);

			// ref -> 引用类型的值 -> 是用 reactive 包裹  使用时 需加 .value
			let info = ref({
				val: "heihei",
			});
			console.log(info);

			function handleCount() {
				// vue3+eslint 帮助查看.value
				count.value++;
				console.log(count);
			}

			// {} -> []
			const user = reactive({
				name: "tom",
				age: 19,
			});
			console.log(user);

			function handleChangeAge() {
				user.age++;
			}

			// ref  vs reactive
			// const obj = {
			// 	name: "tom",
			// 	age: 19,
			// };

			// const name = "tom";
			// const age = 19;

			return {
				count,
				handleCount,
				user,
				handleChangeAge,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
