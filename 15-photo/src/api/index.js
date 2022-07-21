import http from "../utils/http";

export function fetchLogin({ username, password }) {
	// return http.post("/api/login", {
	return http.post("http://localhost:8081/login", {
		username,
		password,
	});
}

export function fetchGetphotos() {
	// return http.get("/api/getPhotos");
	return http.get("http://localhost:8081/getPhotos");
}

export function fetchUpload(img) {
	const data = new FormData();
	data.append("img", img);
	return http.post("http://localhost:8081/upload", data);
}
