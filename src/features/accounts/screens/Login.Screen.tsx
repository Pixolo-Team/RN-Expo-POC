import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import DateInput from "../../../components/common-components/DateInput";
import TextInputBox from "../../../components/common-components/TextInputBox";
import Button from "../../../components/common-components/Button";
import { event } from "react-native-reanimated";
import { loginRequest } from "../../../services/api/users";
import { UserData } from "../../../types/user";


// STYLES //

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //

// SVG'S //

// interface LoginScreenProps {}

/** 
 * Login Screen Component
 */
const LoginScreen: React.FC<unknown> = () => {
	// Define States
    const [loader, setloader] = useState<boolean>(false);
	const [username, setUsername] = useState(""); // State for username input
	const [password, setPassword] = useState(""); // State for password input
    const [userInputError, setUserInputError] = useState<string>("");
	const [passwordInputError, setPasswordInputError] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<string>("");
	// Helper Function: Handle login attempt
    const resetErrors = () => {
		setUserInputError("");
		setPasswordInputError("");
		setErrorMessage("");
	};
	const validateInputs = () => {
		let valid = true;
		// Check if Username Input is filled
		if (username === "") {
			setUserInputError("You need to enter a valid User Name or Email");
			valid = false;
		}
		// Check if password input is filled
		if (password=== "") {
			setPasswordInputError("You need to enter a valid Password");
			valid = false;
		}
		return valid;
	};

	/** Handle Login Functionality */
	const doLogin = async () => {
		resetErrors();
		// Check input validity
		if (validateInputs()) {
			try {
				// Make API Call to Login API Endpoint
				const loginResponse = await loginRequest(username, password);
               
				if (loginResponse.status) {
					const userData: UserData = loginResponse.data;
					// Login the user into the App
					loginUser(userData);
				} else {
					setErrorMessage(loginResponse.message);
				}
			} catch (error) {
				console.log("Login Error", error);
				setErrorMessage(
					"Looks like we faced some network issues. Please try again."
				);
			}
		}
	};
	// View starts here
	return (
		<>
			<Text>Login Screen</Text>
			<View style={styles.box}>
				<TextInputBox
					label="Username"
					value={username}
					placeholder="Enter the UserName"
					type="text"
					onChangeText={setUsername}
					
					
				/>
				<TextInputBox
					label="Password"
					value={password}
					placeholder="Enter the Password"
					type="password"
					
					onChangeText={setPassword}
				/>
			</View>
			<Button size="big" text="Login" mode="block" onClick={doLogin} />
		</>
	);
};

const styles = StyleSheet.create({
	box: {
		marginTop: 70,
		marginBottom: 25,
	},
});

export default LoginScreen;
function setErrorMessage(message: string) {
    throw new Error("Function not implemented.");
}

function loginUser(userData: UserData) {
    throw new Error("Function not implemented.");
}

