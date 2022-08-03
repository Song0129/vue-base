import { ref, onMounted, onUnmounted, reactive } from "vue";

export function userMouseMove() {
	const x = ref(0);
	const y = ref(0);

	const position = reactive({
		x: 0,
		y: 0,
	});

	function handleMouseMove(e) {
		// x.value = e.pageX;
		// y.value = e.pageY;
		position.x = e.pageX;
		position.y = e.pageY;
	}

	onMounted(() => {
		window.addEventListener("mousemove", handleMouseMove);
	});

	onUnmounted(() => {
		window.removeEventListener("mousemove", handleMouseMove);
	});

	return { x, y, position };
}
