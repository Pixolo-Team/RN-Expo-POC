
export interface Device {
	id?: string;
	device_id: string | null; // Unique ID of the device
	device_name?: string; // Samsung, Oppo
	expo_id?: string;
	login_time?: number; // epoch time
	platform?: string;
	status?: 0 | 1; // 0?: Logged Out, 1?: Logged In
}

export type UserData = {
	user_id: number;
	email: string;
	first_name: string;
	last_name: string;
	token: string;
};