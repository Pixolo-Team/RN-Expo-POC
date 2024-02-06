// REACT //
import React, { useEffect, useState } from "react";

// REACT NATIVE //
import { Text, View } from "react-native";

// TYPES //
import { LoginFormErrors, LoginInputData } from "../../../types/account";

// COMPONENTS //
import TextInputBox from "../../../components/common-components/TextInputBox";
import Button from "../../../components/common-components/Button";

// CONTEXTS //
import { useAuthenticationContext } from "../../../contexts/authentication.context";

// SERVICES //
import { logPageViewEvent } from "../../../services/analytics.service";

// UTILS //
import { validateEmail } from "../../../utils/validation.util";

// interface LoginScreenProps {}

/** Login Screen */
const LoginScreen: React.FC<unknown> = () => {
	// Define Contexts
	const { login, isAuthLoading } = useAuthenticationContext();

	// Define States
	const [formInputs, setFormInputs] = useState<LoginInputData>({
		email_input: "",
		password_input: "",
	});

	// Define Error States
	const [formErrors, setFormErrors] = useState<LoginFormErrors>({
		email_error: "",
		password_error: "",
		form_error: "",
	});

	// Helper Function: Handle login attempt
	/** Update the input of Form */
	const changeFormInput = (
		key: keyof LoginInputData,
		value: string | number
	): void => {
		// Update the form inputs state with the new value for the specified key
		setFormInputs((prevInputs: LoginInputData) => {
			// Return a new object with the previous inputs merged with the new value
			return {
				...prevInputs,
				[key]: value,
			};
		});
	};

	/** Reset all errors */
	const resetErrors = (): void => {
		setFormErrors({
			email_error: "",
			password_error: "",
			form_error: "",
		});
	};

	/** Validate all the Inputs in the Form */
	const validateInputs = (): boolean => {
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
		if (formInputs.password_input === "") {
			setFormErrors((prevErrors) => ({
				...prevErrors,
				password_error: "You need to enter a valid Password",
			}));
			isValid = false;
		}

		// Return the validation State
		return isValid;
	};

	/** Handle the Login Functionality - via the Authentication Context */
	const handleLogin = async (): Promise<void> => {
		// Reset the old errors
		resetErrors();
		// Check input validity
		if (validateInputs()) {
			try {
				// Call the Login Function in the Authentication Context
				const loginResponse = await login(formInputs);
				// Check the Login Response (to show Errors)
				if (!loginResponse.status) {
					setFormErrors((prevErrors) => ({
						...prevErrors,
						form_error: loginResponse.message,
					}));
				}
			} catch (error) {
				console.log("Login Error", error);
				setFormErrors((prevErrors) => ({
					...prevErrors,
					form_error: "Looks like we faced some network issues. Please try again.",
				}));
			}
		}
	};

	// Use Effect and Focus Effect
	useEffect(() => {
		// Log Event in firebase analytics when Login Screen is opened
		logPageViewEvent("Login");
	}, []);

	// View starts here
	return (
		<>
			<Text>Login Screen</Text>
			<View>
				{/* Email Input */}
				<TextInputBox
					label="Email"
					value={formInputs.email_input}
					placeholder="Enter the Email"
					type="text"
					onChangeText={(value: string) => changeFormInput("email_input", value)}
					errorMessage={formErrors.email_error}
					isError={formErrors.email_error !== ""}
					onClear={() => changeFormInput("email_input", "")}
				/>

				{/* Password Input */}
				<TextInputBox
					label="Password"
					placeholder="********"
					value={formInputs.password_input}
					onChangeText={(value) => changeFormInput("password_input", value)}
					type="password"
					errorMessage={formErrors.password_error}
					isError={formErrors.password_error !== ""}
					onClear={() => changeFormInput("password_input", "")}
				/>

				{/* Error Message */}
				{formErrors.form_error !== "" && <Text>{formErrors.form_error}</Text>}
			</View>

			{/* Login Button */}
			<Button
				size="big"
				text="Login"
				mode="block"
				onClick={handleLogin}
				showButtonLoader={isAuthLoading}
			/>
		</>
	);
};

export default LoginScreen;
