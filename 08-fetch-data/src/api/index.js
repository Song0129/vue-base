export function apiPost(id, showError) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (showError) {
				reject();
			} else {
				resolve({
					title: "title" + id,
					body: "body" + id,
				});
			}
		}, 1000);
	});
}
