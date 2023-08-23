// IMPORTS //
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

// STYLES //

// COMPONENTS //
import Checkbox from "../../../components/common-components/CheckBox";

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States
	const [isChecked, setIsChecked] = useState(false); // For checkbox
	// Define Refs

	// Helper Functions
	/** Function to toggle the checkbox state when it's pressed */
	const toggleCheckbox = () => {
		setIsChecked((prevState) => !prevState);
	};

	// Use Effect and Focus Effect

	// View starts here
	return (
		<View style={styles.container}>
			<Text>Home Screen Works</Text>
			{/** Added for testing Checkbox */}
			<View
				style={{ height: 100, justifyContent: "center", alignItems: "center" }}
			>
				<Checkbox label="Checkbox 1" checked={isChecked} onPress={toggleCheckbox} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
