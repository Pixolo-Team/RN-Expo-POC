export interface Device {
	id?: string;
	device_id: string | null; // Unique ID of the device
	device_name?: string; // Samsung, Oppo
	expo_id?: string;
	login_time?: number; // epoch time
	platform?: string;
	status?: 0 | 1; // 0?: Logged Out, 1?: Logged In
}

type UserData = {
	_id?: string;
	devices?: Device[];
	dob?: Date;
	email: string;
	phone_number?: string;
	first_name: string;
	last_name?: string;
	profile_photo?: string; // Relative path
	password?: string;
	token: string;
	username?: string;
};

export { UserData };