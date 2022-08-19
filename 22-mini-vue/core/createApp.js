import { effectWatch } from "./index.js";
export function createApp(rootComponent) {
	// app
	return {
		mount(rootContainer) {
			const setupResult = rootComponent.setup();
			// render -> effectWatch
			// effectWatch -> render
			effectWatch(() => {
				rootContainer.textContent = "";
				const element = rootComponent.render(setupResult);
				rootContainer.append(element);
			});
		},
	};
}
