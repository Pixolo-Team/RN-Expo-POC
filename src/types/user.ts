interface Device {
	id?: string;
	device_id: string | null; // Unique ID of the device
	device_name?: string; // Samsung, Oppo
	expo_id?: string;
	login_time?: number; // epoch time
	platform?: string;
	status?: 0 | 1; // 0?: Logged Out, 1?: Logged In
}
interface ContactInfo {
	email?: string;
	phone_number?: string;
}

type UserData = {
	_id?: string;
	bio?: string;
	contact_info?: ContactInfo;
	devices?: Device[];
	dob?: Date;
	email?: string;
	first_name?: string;
	last_name?: string;
	login_type?: 1 | 2; // 1?: username
	profile_photo?: string; // Relative path
	password?: string;
	token: string;
	username?: string;
};

interface UserCoreData {
	first_name: string;
	last_name: string;
	profile_photo: string;
	user_id: string;
	username: string;
}

type LoginApiData = {
	user: UserCoreData;
	token: string;
};

export { ContactInfo, Device, UserCoreData, UserData, LoginApiData };
