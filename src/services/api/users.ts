// MODULES //
import axios, { AxiosRequestConfig } from "axios";

// TYPES //
import { ApiResponseData } from "../../types/api-responses";
import { UserData } from "../../types/user";

// CONSTANTS //
import { API_URL } from "../../infrastructure/constants";

/** Function which is responsible for storing the data of sign up*/
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
