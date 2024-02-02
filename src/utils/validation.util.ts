/**Email Valication function */
export const validateEmail = (email: string) => {
	// Regular expression to validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};