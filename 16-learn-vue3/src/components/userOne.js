import { ref, watch, computed } from "vue";

export default function userOne() {
	const one = ref(1);
	// eslint-disable-next-line no-unused-vars
	const handleOne = () => {
		one.value + 1;
	};
	watch(one, () => {});
	// eslint-disable-next-line no-unused-vars
	const plusOne = computed(() => one.value + 1);
	return { one };
}
