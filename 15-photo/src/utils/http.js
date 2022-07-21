import axios from "axios";
import store from "../store";

const myAxios = axios.create({});

myAxios.interceptors.request.use(config => {
	const token = store.state.token;
	console.log(token);
	if (token) {
		config.headers.authorization = "Bearer " + token;
	}
	return config;
});

export default myAxios;
