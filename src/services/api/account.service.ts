import axios from "axios";
import * as device from "expo-device";

// SERVICES //

// INFRASTRUCTURE //
import { API_URL, CONSTANTS } from "../../infrastructure/constants/constants";

// TYPES //
import { UserData } from "../../types/user";
import { LoginRequestBody } from "../../types/user";

// PLUGINS //
import { androidId, getIosIdForVendorAsync } from "expo-application";

/** Create user account */
export const createUserRequest = async (data: Partial<UserData>) => {
	const response = await axios.post(`${API_URL}users/createUser`, data);
	return response.data;
};

/** Check User name request */
export const checkUsernameRequest = async (username: string) => {
	const response = await axios.post(`${API_URL}users/checkUsername`, {
		username: username,
	});
	return response.data;
};

/** Login user */
export const loginRequest = async (userInput: string, password: string) => {
	const requestBody: LoginRequestBody = {
		user_input: userInput,
		password: password,
		device: {
			device_id: CONSTANTS.IS_ANDROID ? androidId : await getIosIdForVendorAsync(),
			platform: CONSTANTS.OS,
			device_name: device.brand ?? "Unknown Device",
		},
	};
	const responseLogin = await axios.post(
		`${API_URL}users/loginUser`,
		requestBody
	);
	return responseLogin.data;
};

/** Get User request */
export const getUserDataRequest = async (userId: string) => {
	const response = await axios.get(`${API_URL}users/${userId}`);
	return response.data;
};

/** Verify Token Request */
export const verifyTokenRequest = async (token: string) => {
	const response = await axios.get(`${API_URL}users/verifyToken`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
	});
	return response.data;
};

/** Sign out  */
export const logoutRequest = async (
	userToken: string,
	deviceId: string | null
) => {
	const response = await axios.post(
		`${API_URL}users/logoutUser`,
		{ device_id: deviceId },
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: userToken,
			},
		}
	);
	return response.data;
};

// /** Reset password */
// export const resetPasswordRequest = async (data: any) => {};
