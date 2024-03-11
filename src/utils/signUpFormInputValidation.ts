// TYPES //
import {
	LoginFormErrorsData,
	LoginInputData,
	LoginInputValidationRuleData,
	SignUpFormErrorsData,
	SignUpInputData,
	SignUpInputValidationRuleData,
	ValidationRuleData,
} from "../types/account";

// OTHERS //
import { Dispatch, SetStateAction } from "react";
import {
	validateConfirmPassword,
	validateEmail,
	validateName,
	validatePassword,
	validatePhoneNumber,
} from "./validation.util";

// HELPERS FUNCTIONS //

/** Function to checks the input field validation of Sign Up form */
export const validateFormInputs = (
	formInputs: SignUpInputData,
	setFormErrors: Dispatch<SetStateAction<SignUpFormErrorsData>>,
	// | Dispatch<SetStateAction<LoginFormErrorsData>>,
	formValidationRules: SignUpInputValidationRuleData
	// | LoginInputValidationRuleData
): boolean => {
	let isValid = true;
	// Iterate over each field in formInputs
	for (const key in formInputs) {
		if (Object.prototype.hasOwnProperty.call(formInputs, key)) {
			// Get Value of Form Input as per the key
			const value = formInputs[key as keyof typeof formInputs];
			// Get Validation Rules of Input as per the key
			const rules = formValidationRules[key as keyof typeof formInputs];

			// Iterate over each rule for the field
			rules.forEach((rule: ValidationRuleData) => {
				switch (rule.type) {
					case "required":
						if (value == "") {
							isValid = false;
							setFormErrors((prevErrors: SignUpFormErrorsData) => ({
								...prevErrors,
								[`${key}_error`]: `Please enter ${key.replace(/_/g, " ")}`,
							}));
						}
						break;
					case "name":
						if (!validateName(value)) {
							isValid = false;
							setFormErrors((prevErrors: SignUpFormErrorsData) => ({
								...prevErrors,
								[`${key}_error`]: `Invalid ${key.replace(/_/g, " ")}`,
							}));
						}
						break;
					case "email":
						if (!validateEmail(value)) {
							isValid = false;
							setFormErrors((prevErrors: SignUpFormErrorsData) => ({
								...prevErrors,
								[`${key}_error`]: `Invalid ${key.replace(/_/g, " ")}`,
							}));
						}
						break;
					case "phone":
						if (!validatePhoneNumber(value)) {
							isValid = false;
							setFormErrors((prevErrors: SignUpFormErrorsData) => ({
								...prevErrors,
								[`${key}_error`]: `Invalid ${key.replace(/_/g, " ")}`,
							}));
						}
						break;
					case "password":
						if (!validatePassword(value)) {
							isValid = false;
							setFormErrors((prevErrors: SignUpFormErrorsData) => ({
								...prevErrors,
								[`${key}_error`]: `Invalid ${key.replace(/_/g, " ")}`,
							}));
						}
						break;
					case "confirm_password":
						if (!validateConfirmPassword(formInputs.password, value)) {
							isValid = false;
							setFormErrors((prevErrors: SignUpFormErrorsData) => ({
								...prevErrors,
								[`${key}_error`]: "Passwords do not match",
							}));
						}
						break;
					default:
						break;
				}
			});
		}
	}

	return isValid;
};
