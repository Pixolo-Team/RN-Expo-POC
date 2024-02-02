/**Email Valication function */
export const validateEmail = (email: string) => {
	// Regular expression to validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

/**Function to check number validity */
export const isNumeric = (str: string) => {
	// Regular expression to validate email format
	return /^\d+$/.test(str);
};