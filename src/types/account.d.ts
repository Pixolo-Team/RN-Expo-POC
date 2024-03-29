type LoginApiData = {
	user: UserCoreData;
	token: string;
};
type LoginInputData = {
	email_input: string;
	password_input: string;
};

type LoginFormErrorsData = {
	email_error: string;
	password_error: string;
	form_error: string;
};

export { LoginApiData, LoginInputData, LoginFormErrorsData };
