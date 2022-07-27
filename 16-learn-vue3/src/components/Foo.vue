<template>
	<div>
		<div>count: {{ count }} --- double: {{ double }}<button @click="handleCount">click</button></div>
	</div>
	<div>
		<div>user:{{ user.name }}--{{ user.age }} readonlyUser:{{ readonlyUser.age }} <button @click="handleChangeAge">click</button></div>
	</div>
</template>

<script>
	import { ref, reactive, readonly, computed, watch } from "vue";
	import _ from "lodash";
	export default {
		props: ["title"],
		setup(props) {
			// props
			// setup -> not this
			// 不能使用这种方式 this.$props
			console.log(props);
			// props.title = "haha";
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
				readonlyUser.age++;
			}

			// 依赖注入的话 传值给子组件
			// provide/inject
			const readonlyUser = readonly({
				name: "tom",
				age: 19,
			});

			// ref  vs reactive
			// const obj = {
			// 	name: "tom",
			// 	age: 19,
			// };

			// const name = "tom";
			// const age = 19;

			const double = computed(() => {
				return count.value * 2;
			});

			console.log(double);

			// console.log("lodash", _.cloneDeep);

			watch(
				count,
				(newVal, oldVal) => {
					console.log("count - watch", newVal, oldVal);
				},
				{
					immediate: true,
				}
			);

			// object -> value
			watch(
				() => user.age,
				(newVal, oldVal) => {
					console.log("user.age - watch", newVal, oldVal);
				}
			);

			watch(
				() => _.cloneDeep(user),
				(newVal, oldVal) => {
					console.log("user - watch", newVal, oldVal);
				}
			);

			return {
				double,
				readonlyUser,
				count,
				handleCount,
				user,
				handleChangeAge,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
