/** Email Validation function */
export const validateEmail = (email: string) => {
	// Regular expression to validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

/** Function to check if the input string is a numeric value with at least 10 digits. */
export const isNumericWithMinDigits = (str: string): boolean => {
	// Regular expression to validate that the string is numeric and has at least 10 digits
	return /^\d{10,}$/.test(str);
};
