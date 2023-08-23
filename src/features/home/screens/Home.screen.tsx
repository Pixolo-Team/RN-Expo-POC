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
	const [selectedValueForDropdown, setSelectedValueForDropdown] = useState<string>("");

	/** Array Variable for Dropdown Items List */
	const dropdownItemList = [
		{ label: "Item 1", value: "item1" },
		{ label: "Item 2", value: "item2" },
	];

	// Define Refs

	// Helper Functions

	// Use Effect and Focus Effect

	// View starts here
	return (
		<View style={styles.container}>
			<Text>Home Screen Works</Text>

			{/* Component for DropDown */}
			<DropDown
				style={{ margin: 20 }} // Added for testing purpose
				label="Select from Dropdown"
				dropdownItems={dropdownItemList}
				selectedValue={selectedValueForDropdown}
				onItemChange={(text) => {
					setSelectedValueForDropdown(text);
				}}
				placeholder="Select Item"
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
