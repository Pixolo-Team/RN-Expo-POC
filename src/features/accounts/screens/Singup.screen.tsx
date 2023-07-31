// IMPORTS //
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

// CONTEXT //
import { useAuthContext } from "../../../services/context/auth.context";

// SERVICES //

// PLUGINS //
import { useNavigation } from "@react-navigation/native";

// STYLES //
import { loginStyles } from "../components/login.styles";

/** Signup screen component */
const SignupScreen: React.FC = () => {
	// States
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Context
	const { signup } = useAuthContext();
	const navigation = useNavigation();

	/** Function to handle user signup */
	const handleSignup = () => {
		// Email validation
		if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			Alert.alert("Invalid Email", "Please enter a valid email address.");
			return;
		}

		// Password validation
		if (password.length < 6) {
			Alert.alert("Weak Password", "Password must be at least 6 characters long.");
			return;
		}

		signup(email, password)
			.then(() => {
				// Navigate to the login screen after successful signup
				navigation.navigate("Login");
			})
			.catch((error) => {
				Alert.alert("Signup Error", error.message);
			});
	};

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
				<Text style={{ margin: 10 }}>Signup Screen</Text>
				<TextInput
					style={{ margin: 10 }}
					placeholder="Email"
					value={email}
					onChangeText={setEmail}
				/>
				<TextInput
					style={{ margin: 10 }}
					placeholder="Password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<Button title="Signup" onPress={handleSignup} />
			</View>
		</View>
	);
};

export default SignupScreen;
