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
				const subTree = rootComponent.render(setupResult);
				console.log(subTree);
				// rootContainer.append(element);
			});
		},
	};
}
