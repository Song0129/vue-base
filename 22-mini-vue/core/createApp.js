import { effectWatch, mountElement, diff } from "./index.js";
export function createApp(rootComponent) {
	// app
	return {
		mount(rootContainer) {
			const setupResult = rootComponent.setup();
			let isMounted = false;
			let prevSubTree;
			// render -> effectWatch
			// effectWatch -> render
			effectWatch(() => {
				if (!isMounted) {
					// 初次挂载
					console.log("mounted");
					rootContainer.textContent = "";
					const subTree = rootComponent.render(setupResult);
					prevSubTree = subTree;
					mountElement(subTree, rootContainer);

					isMounted = true;
				} else {
					// 更新
					console.log("update", prevSubTree);
					const subTree = rootComponent.render(setupResult);
					diff(prevSubTree, subTree);
					prevSubTree = subTree;
				}

				// rootContainer.append(element);
			});
		},
	};
}
