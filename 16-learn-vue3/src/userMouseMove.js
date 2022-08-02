import { ref, onMounted, onUnmounted } from "vue";

export function userMouseMove() {
	const x = ref(0);
	const y = ref(0);

	function handleMouseMove(e) {
		x.value = e.pageX;
		y.value = e.pageY;
	}

	onMounted(() => {
		window.addEventListener("mousemove", handleMouseMove);
	});

	onUnmounted(() => {
		window.removeEventListener("mousemove", handleMouseMove);
	});

	return { x, y };
}
