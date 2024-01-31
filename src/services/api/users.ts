import axios, { AxiosRequestConfig } from "axios";

// SERVICES //
import { getPushToken } from "../pushNotification";

// INFRASTRUCTURE //
import { API_URL, CONSTANTS } from "../../infrastructure/constants";

// TYPES //
import { Device, LoginApiData, UserData } from "../../types/user";
import { ApiResponseData } from "../../types/app";

// PLUGINS //
import { androidId, getIosIdForVendorAsync } from "expo-application";
import * as device from "expo-device";

/** Create user account */
export const createUserRequest = async (
	data: Partial<UserData>
): Promise<ApiResponseData<UserData>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${API_URL}users/createUser`,
			headers: {},
			data: data,
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<UserData>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Login user */
export const loginRequest = async (
	userInput: string,
	password: string
): Promise<ApiResponseData<LoginApiData>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${API_URL}dummy/login.php`,
			headers: {},
			data: {
				user_input: userInput,
				password: password,
				device: {
					expo_id: await getPushToken(),
					device_id: CONSTANTS.IS_ANDROID
						? androidId
						: await getIosIdForVendorAsync(),
					platform: CONSTANTS.OS,
					device_name: device.brand ?? "Unknown Device",
				} as Device,
			},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<LoginApiData>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Get User request */
export const getUserDataRequest = async (
	userId: string
): Promise<ApiResponseData<UserData>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "get",
			url: `${API_URL}users/${userId}`,
			headers: {},
			data: {},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<UserData>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Verify Token Request */
export const verifyTokenRequest = async (
	token: string
): Promise<ApiResponseData<boolean>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "get",
			url: `${API_URL}users/verifyToken`,
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
			data: {},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<boolean>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Sign out  */
export const logoutRequest = async (
	deviceId: string | null
): Promise<ApiResponseData<boolean>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${API_URL}users/logoutUser`,
			headers: {},
			data: {
				device_id: deviceId,
			},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<boolean>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Change Password Request */
export const changePasswordRequest = async (
	current_password: string,
	new_password: string
): Promise<ApiResponseData<boolean>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${API_URL}users/changePassword`,
			headers: {},
			data: {
				current_password: current_password,
				new_password: new_password,
			},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<boolean>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Delete User Account Request */
export const deleteUserAccountRequest = async (): Promise<
	ApiResponseData<boolean>
> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "delete",
			url: `${API_URL}users`,
			headers: {},
			data: {},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<boolean>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};
