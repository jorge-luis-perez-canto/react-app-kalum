import axios from "axios";
import {
	REGISTER_USER_ENDPOINT,
	LOGIN_ENDPOINT,
	APP_USERNAME,
	APP_PASSWORD,
} from "../utils/endPoints";
import qs from "querystring";
import setAuthToken from "../utils/setAuthToken";
import { SET_CURRENT_USER } from "./types";

export const accountCreated = (userData) => (dispatch) => {
	return new Promise((resolve, reject) => {
		axios
			.post(REGISTER_USER_ENDPOINT, userData, {
				headers: { "Content-Type": "application/json" },
			})
			.then((response) => {
				console.log(JSON.stringify(response));
				resolve(response);
			})
			.catch((error) => {
				console.log(JSON.stringify(error));
				reject(error);
			});
	});
};

export const logInUser = (userData) => (dispatch) => {
	const token = Buffer.from(`${APP_USERNAME}:${APP_PASSWORD}`, "utf8").toString(
		"base64"
	);
	const config = {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${token}`,
		},
	};
	userData = { ...userData, grant_type: "password" };
	return new Promise((resolve, reject) => {
		axios
			.post(LOGIN_ENDPOINT, qs.stringify(userData), config)
			.then((response) => {
				const { access_token } = response.data;
				localStorage.setItem("token", access_token);
				setAuthToken(access_token);
				const payload = JSON.parse(atob(access_token.split(".")[1]));
				dispatch(setCurrentUser({ user: payload, loggedIn: true }));
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const setCurrentUser = ({ user, loggedIn }) => {
	return {
		type: SET_CURRENT_USER,
		payload: { user, loggedIn },
	};
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem("token");
	setAuthToken(false);
	dispatch(setCurrentUser({ user: {}, loggedIn: false }));
};
