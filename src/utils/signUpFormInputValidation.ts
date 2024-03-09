// TYPES //
import { SignUpFormErrorsData, SignUpInputData } from "../types/account";

// OTHERS //
import { Dispatch, SetStateAction } from "react";
import {
	validateConfirmPassword,
	validateEmail,
	validateName,
	validatePassword,
	validatePhoneNumber,
} from "./validation.util";

/** Function to checks the input field validation of Sign Up form */
export const validateSignUpFormInputs = (
	formInputs: SignUpInputData,
	setFormErrors: Dispatch<SetStateAction<SignUpFormErrorsData>>
): boolean => {
	let valid = true;

	// Validates the Name input field
	if (formInputs.first_name === "" || !validateName(formInputs.first_name)) {
		setFormErrors((pastErrors) => ({
			...pastErrors,
			first_name_error: "You need to enter a valid First name",
		}));
		valid = false;
	}

	// Validates the Last Name input field
	if (formInputs.last_name === "" || !validateName(formInputs.last_name)) {
		setFormErrors((pastErrors) => ({
			...pastErrors,
			last_name_error: "You need to enter a valid Last name",
		}));
		valid = false;
	}

	// Validates the Email input field
	if (!formInputs.email || !validateEmail(formInputs.email)) {
		setFormErrors((pastErrors) => ({
			...pastErrors,
			email_error: "You need to enter a valid Email address",
		}));
		valid = false;
	}

	// Validates the Phone input field
	if (
		formInputs.phone_number === "" ||
		!validatePhoneNumber(formInputs.phone_number)
	) {
		setFormErrors((pastErrors) => ({
			...pastErrors,
			phone_number_error: "You need to enter a 10 Digit Phone number",
		}));
		valid = false;
	}

	// Validates the Password input field
	if (formInputs.password === "" || !validatePassword(formInputs.password)) {
		setFormErrors((pastErrors) => ({
			...pastErrors,
			password_error:
				"Password must contain atleast 8 characters with atleast one Special character, one Uppercase letter and one Number.",
		}));
		valid = false;
	}

	// Validates the Confirm Password input field
	if (
		formInputs.confirm_password === "" ||
		!validateConfirmPassword(formInputs.password, formInputs.confirm_password)
	) {
		setFormErrors((pastErrors) => ({
			...pastErrors,
			confirm_password_error: "Your Password is not matching",
		}));
		valid = false;
	}

	return valid;
};
