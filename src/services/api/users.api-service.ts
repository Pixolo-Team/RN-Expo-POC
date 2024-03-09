// MODULES //
import axios, { AxiosRequestConfig } from "axios";

// PLUGINS //
import { androidId, getIosIdForVendorAsync } from "expo-application";
import * as device from "expo-device";

// TYPES //
import { DeviceData, UserData } from "../../types/users";
import { ApiResponseData } from "../../types/app";
import { LoginApiData, SignUpApiResponseData } from "../../types/account";

// ENUMS //
import { LocalStorageKeys } from "../../enums/local-storage.enum";

// SERVICES //
import { getPushToken } from "../push-notification.service";
import { getDataFromLocalStorage } from "../local-storage.service";

// UTILS //
import { API_URL, CONSTANTS } from "../../infrastructure/constants";

// INFRASTRUCTURE //

/** Create User (Sign Up) */
export const createUserRequest = async (
	user: Partial<UserData>
): Promise<ApiResponseData<SignUpApiResponseData>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${API_URL}dummy/create-user.php`,
			headers: {},
			data: {
				...user,
				device: {
					expo_id: await getPushToken(),
					device_id: CONSTANTS.IS_ANDROID
						? androidId
						: await getIosIdForVendorAsync(),
					platform: CONSTANTS.OS,
					device_name: device.brand ?? "Unknown Device",
				} as DeviceData,
			},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<SignUpApiResponseData>>(
			config
		);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Login User */
export const loginRequest = async (
	email: string,
	password: string
): Promise<ApiResponseData<LoginApiData>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${API_URL}dummy/login.php`,
			headers: {},
			data: {
				email: email,
				password: password,
				device: {
					expo_id: await getPushToken(),
					device_id: CONSTANTS.IS_ANDROID
						? androidId
						: await getIosIdForVendorAsync(),
					platform: CONSTANTS.OS,
					device_name: device.brand ?? "Unknown Device",
				} as DeviceData,
			},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<LoginApiData>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Get the Latest User Object */
export const getUserDataRequest = async (
	userId: string
): Promise<ApiResponseData<UserData>> => {
	try {
		// Get the Token from the Local Storage
		const token: string = await getDataFromLocalStorage(LocalStorageKeys.TOKEN);

		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "get",
			url: `${API_URL}dummy/user.php?userId=${userId}`,
			headers: {
				Authorization: token,
			},
			data: {},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<UserData>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Verify if the Token is active */
export const verifyTokenRequest = async (
	token: string
): Promise<ApiResponseData<UserData>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "get",
			url: `${API_URL}dummy/verify-token.php`,
			headers: {
				Authorization: token,
			},
			data: {},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<UserData>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Logs the User out of the App  */
export const logoutRequest = async (
	userId: string
): Promise<ApiResponseData<boolean>> => {
	try {
		// Get the Token from the Local Storage
		const token: string = await getDataFromLocalStorage(LocalStorageKeys.TOKEN);

		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${API_URL}dummy/logout.php`,
			headers: {
				Authorization: token,
			},
			data: {
				user_id: userId,
				device_id: CONSTANTS.IS_ANDROID
					? androidId
					: await getIosIdForVendorAsync(),
			},
		};

		// Make call to the API
		const response = await axios.request<ApiResponseData<boolean>>(config);
		return response.data;
	} catch (error: any) {
		return error.response;
	}
};

/** Change the Password of the User */
export const changePasswordRequest = async (
	new_password: string
): Promise<ApiResponseData<boolean>> => {
	try {
		// Get the Token from the Local Storage
		const token: string = await getDataFromLocalStorage(LocalStorageKeys.TOKEN);

		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${API_URL}dummy/change-password.php`,
			headers: {
				Authorization: token,
			},
			data: {
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

/** API to send Forgot Password Request to the Backend */
export const forgetPasswordRequest = async (): Promise<
	ApiResponseData<boolean>
> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${API_URL}dummy/forgot-password.php`,
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
