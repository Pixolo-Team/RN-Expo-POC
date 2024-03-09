// TYPES //
import { LoginFormErrorsData, LoginInputData } from "../types/account";

// OTHERS //
import { Dispatch, SetStateAction } from "react";
import { validateEmail, validatePassword } from "./validation.util";

/** Function to checks the input field validation of Sign Up form */
export const validateLoginFormInputs = (
	formInputs: LoginInputData,
	setFormErrors: Dispatch<SetStateAction<LoginFormErrorsData>>
): boolean => {
	let isValid = true;
	// Check if Username Input is filled
	if (formInputs.email_input === "" || !validateEmail(formInputs.email_input)) {
		setFormErrors((prevErrors) => ({
			...prevErrors,
			email_error: "You need to enter a valid Email",
		}));
		isValid = false;
	}

	// Check if password input is filled
	if (
		formInputs.password_input === "" ||
		!validatePassword(formInputs.password_input)
	) {
		setFormErrors((prevErrors) => ({
			...prevErrors,
			password_error: "You need to enter a valid Password",
		}));
		isValid = false;
	}

	// Return the validation State
	return isValid;
};
