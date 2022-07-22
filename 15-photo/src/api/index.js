import http from "../utils/http";

export function fetchLogin({ username, password }) {
	// return http.post("/api/login", {
	return http.post("http://localhost:8081/login", {
		username,
		password,
	});
}

export function fetchGetphotos() {
	return http.get("/api/getPhotos");
	// return http.get("http://localhost:8081/getPhotos");
}

export function fetchUpload(img, cb) {
	const data = new FormData();
	data.append("img", img);
	return http.post("http://localhost:8081/upload", data, {
		onUploadProgress(event) {
			const val = Math.floor((event.loaded / event.total) * 100);
			cb && cb(val);
		},
	});
}

export function fetchGetphoto(id) {
	return http.get("/api/getPhoto", { params: { pId: id } });
	// return http.get("http://localhost:8081/getPhoto", { params: { pId: id } });
}

// function FetchUrl(url) {
// 	return "http://localhost:8081" + url;
// }
