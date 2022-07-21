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
}
