// IMPORTS //
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

// STYLES //
import { loginStyles } from "../components/login.styles";

// COMPONENTS //

// PLUGINS //
import { useNavigation } from "@react-navigation/native";

// CONTEXT //
import { useAuthContext } from "../../../services/context/auth.context";

/** Login screen component */
const LoginScreen: React.FC = () => {
	// Define States
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// Context
	const { login } = useAuthContext();
	const navigation = useNavigation();

	/** Function to check Login validation and navigate */
	const handleLogin = () => {
		// Email validation
		if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			Alert.alert("Invalid Email", "Please enter a valid email address.");
			return;
		}

		// Password validation
		if (!password) {
			Alert.alert("Empty Password", "Please enter your password.");
			return;
		}

		login(email, password)
			.then(() => {
				// Navigate to the home screen after successful login
				navigation.navigate("Home");
			})
			.catch((error) => {
				Alert.alert("Login Error", error.message);
			});
	};

	// View starts here
	return (
		<View style={loginStyles.SafeAreaViewStyle}>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignContent: "center",
					alignItems: "center",
				}}
			>
				<Text>Login Screen</Text>
				<TextInput placeholder="Email" value={email} onChangeText={setEmail} />
				<TextInput
					placeholder="Password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<Button title="Login" onPress={handleLogin} />
			</View>
		</View>
	);
};

export default LoginScreen;
