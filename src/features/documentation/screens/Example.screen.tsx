// IMPORTS //
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

// STYLES //

// COMPONENTS //
import AppImage from "../../../components/common-components/AppImage";
import Button from "../../../components/common-components/Button";
import Checkbox from "../../../components/common-components/CheckBox";
import DateInput from "../../../components/common-components/DateInput";
import Loader from "../../../components/common-components/Loader";
import TextInputBox from "../../../components/common-components/TextInputBox";

// PLUGINS //

// CONTEXT //

// SVG //
import Close from "../../../../assets/icons/close.svg"; // Added for Button component

/** EXAMPLE COMPONENT TO TEST ALL COMMON COMPONENTS */
const ExampleScreen: React.FC = () => {
	// Define Contexts

	// Define States
	// For Image Component
	const dummyUrl =
		"https://freepngimg.com/thumb/doraemon/35004-7-doraemon-transparent-image.png"; // Dummy URL for testing the Image Component
	// For Loader Component
	const [loading, setLoading] = useState(false); // Initialize a state variable 'loading' to manage the loading state of a component.
	// For DateInput Component
	const [selectedDate, setSelectedDate] = useState(""); // State to hold the selected date
	// For Checkbox Component
	const [isChecked, setIsChecked] = useState(false); // Initialize a state variable 'isChecked' to manage the checked/unchecked state of a checkbox.
	// For TextInput Component
	const [userNameInput, setUserNameInput] = useState<string>(""); // Initialize a state variable to hold the user's input for a username
	const [isErrorUserName, setIsErrorUserName] = useState<boolean>(false); // Initialize a state variable to track whether there's an error with the username input
	const [errorMessage, setErrorMessage] = useState<string>(""); // Initialize a state variable to store an error message related to the username input

	// Define Refs

	// Helper Functions
	// For Loader Component
	/**  Simulate a delay and show the loader (added for testing purpose) */
	const startLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000); // Simulated loading time
	};

	// For DateInput Component
	/** Function to handle the selected date */
	const handleDateChange = (date: React.SetStateAction<string>) => {
		setSelectedDate(date);
	};

	// For Checkbox Component
	/** Function to toggle the checkbox state when it's pressed */
	const toggleCheckbox = () => {
		setIsChecked((prevState) => !prevState);
	};

	// For Button Component
	/** On click Button */
	const handleButtonPress = () => {
		// Handle button press logic here
		console.log("Button Pressed");
	};

	// For TextInput Component
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

	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={{ flex: 1 }}>
			
			{/** For Image Component */}
			<View
				style={{ height: "20%", justifyContent: "center", alignItems: "center" }}
			>
				<AppImage
					uri={dummyUrl}
					style={{
						height: 100,
						width: 100,
						resizeMode: "contain",
					}}
					defaultSource={require("../../../../assets/icon.png")}
				/>
			</View>

			{/** For Checkbox Component */}
			<View
				style={{ height: 100, justifyContent: "center", alignItems: "center" }}
			>
				<Checkbox label="Checkbox 1" checked={isChecked} onPress={toggleCheckbox} />
			</View>

			{/** For DateInput Component  */}
			<View style={{ height: 100, justifyContent: "center", padding: 10 }}>
				<DateInput
					label="Select a Date"
					placeholder="MM/DD/YYYY"
					value={selectedDate}
					onChangeDate={handleDateChange} // Pass the handleDateChange function
				/>
			</View>

			{/** For TextInput Component */}
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

			{/** For Button Component */}
			<View style={{ padding: 30 }}>
				<Button
					icon={<Close width={18} height={18} />}
					text="Custom Button"
					backgroundColor="secondary"
					borderColor="secondary"
					onClick={handleButtonPress}
					size="big"
					mode="block"
				></Button>
			</View>

			{/** For Loader Component  */}
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<TouchableOpacity onPress={startLoading}>
					<Text>Start Loading</Text>
				</TouchableOpacity>
				<Loader visible={loading} text="Loading..." />
			</View>
		</View>
	);
};

export default ExampleScreen;
