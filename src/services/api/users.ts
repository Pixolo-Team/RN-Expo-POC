import axios, { AxiosRequestConfig } from "axios";
import { API_URL, CONSTANTS } from "../../infrastructure/constants";
import * as device from "expo-device";
import { getAndroidId, getIosIdForVendorAsync } from "expo-application";
import { ApiResponseData } from "../../types/api-responses";
import { Device, UserData } from "../../types/user";

export const loginRequest = async (
	userInput: string,
	password: string
): Promise<ApiResponseData<UserData>> => {
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
                    // expo_id: await getPushToken(),
                    device_id: CONSTANTS.IS_ANDROID ? getAndroidId : await getIosIdForVendorAsync(),
                    platform: CONSTANTS.OS,
                    device_name: device.brand ?? "Unknown Device",
                } as Device,
            },
		};
		// Make API Call
		const response = await axios.request<ApiResponseData<UserData>>(config);
		return response.data;
	} catch (error: any) {
		error.response.data.status = false;
		return error.response;
	}
};
