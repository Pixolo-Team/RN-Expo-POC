// IMPORTS
// REACT //
import React, { useEffect, useState } from "react";

// REACT NATIVE //
import { View, ScrollView, Text } from "react-native";

// TYPES //
import { SignUpFormErrorsData, SignUpInputData } from "../../../types/account";

// ENUMS //
import { AnalyticsEvents, AnalyticsPages } from "../../../enums/analytics.enum";

// COMPONENTS //
import TextInputBox from "../../../components/common-components/TextInputBox";
import Button from "../../../components/common-components/Button";

// API SERVICES //
import { createUserRequest } from "../../../services/api/users.api-service";

// CONTEXTS //
import { useAuthenticationContext } from "../../../contexts/authentication.context";

// SERVICES //
import {
	logEvents,
	logPageViewEvent,
} from "../../../services/analytics.service";

// UTILS //
import {
	validateConfirmPassword,
	validateEmail,
	validateName,
	validatePassword,
	validatePhoneNumber,
} from "../../../utils/validation.util";

/** Sign up screen component */
const SignUpScreen: React.FC = () => {
	// Define Contexts
	const { login } = useAuthenticationContext();

	// Define States
	const [formInputs, setFormInputs] = useState<SignUpInputData>({
		first_name: "",
		last_name: "",
		email: "",
		phone_number: "",
		password: "",
		confirm_password: "",
	});

	// Error States
	const [formErrors, setFormErrors] = useState<SignUpFormErrorsData>({
		first_name_error: "",
		last_name_error: "",
		email_error: "",
		phone_number_error: "",
		password_error: "",
		confirm_password_error: "",
		form_error: "",
	});

	// Helper Functions
	/** Function which resets the error back to the initial value */
	const resetErrors = (): void => {
		setFormErrors({
			first_name_error: "",
			last_name_error: "",
			email_error: "",
			phone_number_error: "",
			password_error: "",
			confirm_password_error: "",
			form_error: "",
		});
	};

	/** Function to checks the input field validation of Sign Up form */
	const validateSignUpFormInputs = () => {
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

	/** Submit the Sign Up Form */
	const handleSignUp = async () => {
		// Reset the errors
		resetErrors();
		// Check Form validity
		if (validateSignUpFormInputs()) {
			try {
				// Send the data to the endpoint
				const signUpResponse = await createUserRequest(formInputs);
				if (signUpResponse.status) {
					// Log the event in Analytics for User Sign Up
					logEvents(AnalyticsEvents.USER_SIGN_UP, {
						user_id: signUpResponse.data._id,
						username: signUpResponse.data.username,
						email: signUpResponse.data.email,
					});
					// Login the User into the App
					login({
						email_input: formInputs.email,
						password_input: formInputs.password,
					});
				} else {
					// Handle sign up error
					console.log(signUpResponse.message);
					setFormErrors((pastErrors) => ({
						...pastErrors,
						form_error: signUpResponse.message,
					}));
				}
			} catch (error) {
				console.error("Error signing up:", error);
				setFormErrors((pastErrors) => ({
					...pastErrors,
					form_error: "An error occurred while signing up.",
				}));
			}
		}
	};

	// Use Effect and Focus Effect
	useEffect(() => {
		// Log Event in analytics when Login Screen is opened
		logPageViewEvent(AnalyticsPages.SIGNUP);
	}, []);

	// View starts
	return (
		<ScrollView>
			<View>
				{/* Input for First Name */}
				<TextInputBox
					label="First Name"
					placeholder="Enter Your First Name"
					onChangeText={(text) =>
						setFormInputs((inputs) => ({ ...inputs, first_name: text }))
					}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, first_name: "" }))}
					value={formInputs.first_name ?? ""}
					type="text"
					isError={formErrors.first_name_error !== ""}
					errorMessage={formErrors.first_name_error}
				/>

				{/* Input for Last Name */}
				<TextInputBox
					label="Last Name"
					placeholder="Enter Your Last Name"
					onChangeText={(text) =>
						setFormInputs((inputs) => ({ ...inputs, last_name: text }))
					}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, last_name: "" }))}
					value={formInputs.last_name ?? ""}
					type="text"
					isError={formErrors.last_name_error !== ""}
					errorMessage={formErrors.last_name_error}
				/>

				{/* Input for Email Address */}
				<TextInputBox
					label="Email"
					placeholder="Enter Your Email Address"
					onChangeText={(text) =>
						setFormInputs((inputs) => ({ ...inputs, email: text }))
					}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, email: "" }))}
					value={formInputs.email ?? ""}
					type="email"
					isError={formErrors.email_error !== ""}
					errorMessage={formErrors.email_error}
				/>

				{/* Input for Phone number */}
				<TextInputBox
					label="Phone Number"
					placeholder="Enter Your Phone Number"
					onChangeText={(text) =>
						setFormInputs((inputs) => ({ ...inputs, phone_number: text }))
					}
					onClear={() =>
						setFormInputs((inputs) => ({ ...inputs, phone_number: "" }))
					}
					value={formInputs.phone_number ?? ""}
					type="text"
					isError={formErrors.phone_number_error !== ""}
					errorMessage={formErrors.phone_number_error}
				/>

				{/* Input for Password */}
				<TextInputBox
					label="Password"
					placeholder="Enter Your Password"
					onChangeText={(text) =>
						setFormInputs((inputs) => ({ ...inputs, password: text }))
					}
					onClear={() => setFormInputs((inputs) => ({ ...inputs, password: "" }))}
					value={formInputs.password}
					type="password"
					isError={formErrors.password_error !== ""}
					errorMessage={formErrors.password_error}
				/>

				{/* Input for Confirm Password */}
				<TextInputBox
					label="Confirm Password"
					placeholder="Re-Enter your Password"
					onChangeText={(text) =>
						setFormInputs((inputs) => ({ ...inputs, confirm_password: text }))
					}
					onClear={() =>
						setFormInputs((inputs) => ({ ...inputs, confirm_password: "" }))
					}
					value={formInputs.confirm_password}
					type="password"
					isError={formErrors.confirm_password_error !== ""}
					errorMessage={formErrors.confirm_password_error}
				/>
				{/* Error Message */}
				{formErrors.form_error !== "" && <Text>{formErrors.form_error}</Text>}

				{/* Submit Button Todo: Use Custom Button Component Here */}
				<Button size="big" text="Sign Up" mode="block" onClick={handleSignUp} />
			</View>
		</ScrollView>
	);
};

export default SignUpScreen;
