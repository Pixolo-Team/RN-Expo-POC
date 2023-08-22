// IMPORTS //
import React, { useState } from "react";
import { Alert, View, TouchableOpacity, Text } from "react-native";

// STYLES //

// COMPONENTS //
import Button from "../../../components/common-components/Button";
import TextInputBox from "../../../components/common-components/TextInputBox";

// SVG //
import Close from "../../../../assets/icons/close.svg";

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// States
	const [userNameInput, setUserNameInput] = useState<string>(""); // Initialize a state variable to hold the user's input for a username
	const [isErrorUserName, setIsErrorUserName] = useState<boolean>(false); // Initialize a state variable to track whether there's an error with the username input
	const [errorMessage, setErrorMessage] = useState<string>(""); // Initialize a state variable to store an error message related to the username input

	// Helper functions
	/** On click Button */
	const handleButtonPress = () => {
		// Handle button press logic here
		console.log("Button Pressed");
	};

	/** For TextInput (Validates the user name input based on custom rules.) */
	const handleValidateUserName = () => {
		// Check if the user name is empty or too short
		if (userNameInput.trim() === "" || userNameInput.length < 3) {
			setIsErrorUserName(true);
			setErrorMessage(
				userNameInput.trim() === ""
					? "Username cannot be empty"
					: "Username must be at least 3 characters long"
			);
		} else {
			// Validation succeeded
			Alert.alert("User name is correct"); // Added for testing purpose
			setIsErrorUserName(false);
			setErrorMessage("");
		}
	};

	// View starts
	return (
		<View style={{ marginTop: 100 }}>
			<Button
				icon={<Close width={18} height={18} />}
				text="Custom Button"
				backgroundColor="secondary"
				borderColor="secondary"
				onClick={handleButtonPress}
				size="big"
				mode="block"
			></Button>

			{/** View for TextInputBox */}
			<View style={{ padding: 10 }}>
				<TextInputBox
					label="User Name"
					placeholder="User Name"
					value={userNameInput}
					errorMessage={errorMessage}
					isError={isErrorUserName}
					onClear={() => {
						setUserNameInput("");
						setIsErrorUserName(false);
					}}
					onChangeText={(text) => {
						setUserNameInput(text);
						setIsErrorUserName(false);
						setErrorMessage("");
					}}
					multiline={false}
					style={{}}
				/>

				{/* Button to Trigger Validation , added to test TextInput */}
				{/* When clicked, this button triggers the handleValidateUserName function */}
				<TouchableOpacity
					style={{ alignSelf: "center" }}
					onPress={handleValidateUserName}
				>
					<Text>Click to Check</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HomeScreen;
