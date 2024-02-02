import axios, { AxiosRequestConfig } from "axios";
import { api } from "../../infrastructure/constants";
import { ApiResponseData } from "../../types/api-responses";
import {UserData } from "../../types/user";

/** Function which is responsible for storing the data of sign up*/
export const signUpRequest = async (
	nameInput: string,
	secondNameInput: string,
	emailInput:string,
	numberInput:string
): Promise<ApiResponseData<UserData>> => {
	try {
		// Set up the API Call Config
		const config: AxiosRequestConfig = {
			method: "post",
			url: `${api}dummy/login.php`,
			headers: {},
			data: {
				name_input: nameInput,
				second_name_input: secondNameInput,
				email_input:emailInput,
				number_input:numberInput
               
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
