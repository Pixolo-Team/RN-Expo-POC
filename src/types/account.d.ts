type ValidationRuleData = {
	type?: string;
	msg?: string;
	equalsTo?: string;
};
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
type LoginInputValidationRuleData = {
	email_input: string[];
	password_input: string[];
};

type SignUpApiResponseData = {
	user: UserCoreData;
	token: string;
};
type SignUpInputData = {
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	password: string;
	confirm_password: string;
};
type SignUpFormErrorsData = {
	first_name_error: string;
	last_name_error: string;
	email_error: string;
	phone_number_error: string;
	password_error: string;
	confirm_password_error: string;
	form_error: string;
};
type SignUpInputValidationRuleData = {
	first_name: ValidationRuleData[];
	last_name: ValidationRuleData[];
	email: ValidationRuleData[];
	phone_number: ValidationRuleData[];
	password: ValidationRuleData[];
	confirm_password: ValidationRuleData[];
};

export {
	ValidationRuleData,
	LoginApiData,
	LoginInputData,
	LoginFormErrorsData,
	LoginInputValidationRuleData,
	SignUpApiResponseData,
	SignUpInputData,
	SignUpFormErrorsData,
	SignUpInputValidationRuleData,
};
