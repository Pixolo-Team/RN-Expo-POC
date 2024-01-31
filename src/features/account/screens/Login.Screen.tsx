import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

// STYLES //

// COMPONENTS //
import TextInputBox from "../../../components/common-components/TextInputBox";
import Button from "../../../components/common-components/Button";

// API SERVICES //
import { loginRequest } from "../../../services/api/users";

// SERVICES //
import { logPageViewEvent } from "../../../services/analytics";

// TYPES //
import { UserData } from "../../../types/user";

// CONTEXTS //
import { useAuthenticationContext } from "../../../contexts/authentication.context";

// UTILS //

// PLUGINS //

// SVG'S //

// interface LoginScreenProps {}

/** Login Screen */
const LoginScreen: React.FC<unknown> = () => {
	// Define Contexts
	const { loginUser } = useAuthenticationContext();

	// Define States
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [formInputs, setFormInputs] = useState({
		userInput: "",
		passwordInput: "",
	});

	// Define Error States
	const [formErrors, setFormErrors] = useState({
		userInput: "",
		passwordInput: "",
		errorMessage: "",
	});

	// Helper Function: Handle login attempt

	/** Reset all errors */
	const resetErrors = () => {
		setFormErrors({
			userInput: "",
			passwordInput: "",
			errorMessage: "",
		});
	};
	/** Validate Inputs */
	const validateInputs = () => {
		let valid = true;
		// Check if Username Input is filled
		if (formInputs.userInput === "") {
			setFormErrors((prevErrors) => ({
				...prevErrors,
				userInput: "You need to enter a valid User Name or Email",
			}));
			valid = false;
		}

		// Check if password input is filled
		if (formInputs.passwordInput === "") {
			setFormErrors((prevErrors) => ({
				...prevErrors,
				passwordInput: "You need to enter a valid Password",
			}));
			valid = false;
		}

		return valid;
	};

	/** Handle Login Functionality */
	const handleLogin = async () => {
		setIsLoading(true);
		// Reset the old errors
		resetErrors();
		// Check input validity
		if (validateInputs()) {
			try {
				// Make API Call to Login API Endpoint
				const loginResponse = await loginRequest(
					formInputs.userInput,
					formInputs.passwordInput
				);

				if (loginResponse.status) {
					const userData: UserData = loginResponse.data;
					// Login the user into the App
					loginUser(userData);
				} else {
					setFormErrors((prevErrors) => ({
						...prevErrors,
						errorMessage: loginResponse.message,
					}));
				}
			} catch (error) {
				console.log("Login Error", error);
				setFormErrors((prevErrors) => ({
					...prevErrors,
					errorMessage: "Looks like we faced some network issues. Please try again.",
				}));
			}
		}
		setIsLoading(false);
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
				{/* Username or Email Input */}
				<TextInputBox
					label="Username or Email"
					value={formInputs.userInput}
					placeholder="Enter the UserName or Email"
					type="text"
					onChangeText={(value) =>
						setFormInputs((prevInputs) => ({ ...prevInputs, userInput: value }))
					}
					errorMessage={formErrors.userInput}
					isError={formErrors.userInput !== ""}
					onClear={() =>
						setFormInputs((prevInputs) => ({ ...prevInputs, userInput: "" }))
					}
				/>

				{/* Password Input */}
				<TextInputBox
					label="Password"
					placeholder="********"
					value={formInputs.passwordInput}
					onChangeText={(value) =>
						setFormInputs((prevInputs) => ({ ...prevInputs, passwordInput: value }))
					}
					type="password"
					errorMessage={formErrors.passwordInput}
					isError={formErrors.passwordInput !== ""}
					onClear={() =>
						setFormInputs((prevInputs) => ({ ...prevInputs, passwordInput: "" }))
					}
				/>

				{/* Error Message */}
				{formErrors.errorMessage !== "" && <Text>{formErrors.errorMessage}</Text>}
			</View>

			{/* Login Button */}
			<Button
				size="big"
				text="Login"
				mode="block"
				onClick={handleLogin}
				showButtonLoader={isLoading}
			/>
		</>
	);
};

export default LoginScreen;
