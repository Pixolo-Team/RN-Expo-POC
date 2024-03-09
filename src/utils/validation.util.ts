/** Email Validation function */
export const validateEmail = (email: string): boolean => {
	// Regular expression to validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

/** Phone Validation function */
export const validatePhoneNumber = (phoneNumber: string): boolean => {
	// Regular expression for a 10-digit phone number
	const phoneRegex = /^\d{10}$/;
	return phoneRegex.test(phoneNumber);
};

/** Name Validation function */
export const validateName = (name: string): boolean => {
	// Regular expression to match only letters (uppercase or lowercase)
	// String shouldn't contain any numbers or special characters
	const nameRegex = /^[a-zA-Z\s]*$/;
	return nameRegex.test(name);
};

/** Password Validation function */
export const validatePassword = (password: string): boolean => {
	// Regex to check if the string has
	// Atleast 8 characters, 1 Uppercase letter, 1 Number and 1 Special character
	const passwordRegex =
		/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	return passwordRegex.test(password);
};

/** Confirm Password Validation function */
export const validateConfirmPassword = (
	password: string,
	confirmPassword: string
): boolean => {
	return password === confirmPassword;
};
