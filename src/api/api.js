import axios from "axios";

const baseURL = "http://localhost:8080/query";
const API = axios.create({
	baseURL,
	withCredentials: false,
});

API.interceptors.request.use(
	(req) => {
		const authenticationStatus = store.getState();
		if (authenticationStatus)
			req.headers.Authorization = `Bearer ${authenticationStatus.jwtToken}`;
		return req;
	},
	(error) => Promise.reject(error)
);

export default API;
