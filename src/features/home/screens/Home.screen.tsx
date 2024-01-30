// IMPORTS //
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

// STYLES //

// COMPONENTS //
import DropDown from "../../../components/common-components/DropDown";

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States
	const [selectedValueForDropdown, setSelectedValueForDropdown] =
		useState<string>("");

	/** Array Variable for Dropdown Items List */
	const dummyOptions = [
		{ label: "Option 1", value: "option1" },
		{ label: "Option 2", value: "option2" },
		{ label: "Option 3", value: "option3" },
	];

	// Define Refs

	// Helper Functions

	// Use Effect and Focus Effect

	// View starts here
	return (
		<View style={styles.container}>
			<Text>Home Screen Works</Text>

			<DropDown
				label="Expense Type"
				style={{ margin: 20 }}
				dropdownItems={dummyOptions}
				selectedValue={selectedValueForDropdown}
				onItemChange={(text, label) => {
					setSelectedValueForDropdown(text);
					// If you want to set the label as well, you can do it here
					// label && setSelectedLabelForDropdown(label);
				}}
				placeholder={{
					label: "Select an option",
					value: "", // Specify the value for the placeholder
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
