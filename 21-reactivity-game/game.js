const { ref, effect } = require("@vue/reactivity");
var blessed = require("blessed");

// const val = ref(0);

// setInterval(() => {
// 	val.value++;
// }, 100);

// effect(() => {
// 	box.setContent(`${val.value}%`);
// 	screen.render();
// });

const App = {
	render(content) {
		effect(() => {
			// reset
			// textContent

			if (screen) {
				screen.distory();
			}

			// Create a screen object.
			var screen = blessed.screen({
				smartCSR: true,
			});

			screen.title = "my window title";

			// Create a box perfectly centered horizontally and vertically.
			var box = blessed.box({
				top: "center",
				left: `${content.left.value}%`,
				width: "50%",
				height: "50%",
				content: "Hello {bold}world{/bold}!",
				tags: true,
				border: {
					type: "line",
				},
				style: {
					fg: "white",
					bg: "magenta",
					border: {
						fg: "#f0f0f0",
					},
					hover: {
						bg: "green",
					},
				},
			});

			box.on("click", content.handleClick);

			// Append our box to the screen.
			screen.append(box);

			// Quit on Escape, q, or Control-C.
			screen.key(["escape", "q", "C-c"], function (ch, key) {
				return process.exit(0);
			});

			// Render the screen.
			screen.render();
		});
	},
	setup() {
		const left = ref(0);

		setInterval(() => {
			left.value++;
		}, 200);

		function handleClick() {
			left.value = 1;
		}

		return { left, handleClick };
	},
};

App.render(App.setup());
