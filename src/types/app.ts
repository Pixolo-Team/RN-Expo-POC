import { Device } from "./user";

export interface LoginRequestBody {
	device: Device;
	password: string;
	user_input: string;
}

export type ApiResponseData<T> = {
	status: boolean;
	status_code: number;
	message: string;
	data: T;
};
