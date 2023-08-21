// IMPORTS //
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

// STYLES //

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //

// SVG'S //
import Check from "../../assets/icons/check.svg";

// Define the props for the CheckBox component
interface CheckboxProps {
	label: string; // The label for the checkbox
	isChecked: boolean; // Indicates whether the checkbox is checked or not
	onChange: (isChecked: boolean) => void; // Function to handle checkbox state changes
	disabled?: boolean; // Add a disabled property
}

// Define the CheckBox component
const CheckBox: React.FC<CheckboxProps> = ({
	label,
	isChecked,
	onChange,
	disabled = false,
}) => {
    
	// Function to toggle the checkbox state when it's pressed
	const toggleCheckbox = () => {
		// Only toggle if the checkbox is not disabled
		if (!disabled) {
			onChange(!isChecked);
		}
	};

	// View starts here
	return (
		// Create a touchable area for the checkbox, disable it if the 'disabled' prop is true
		<TouchableOpacity onPress={toggleCheckbox} disabled={disabled}>
			<View style={styles.container}>
				<View
					style={[
						styles.checkBox,
						{
							// Apply a different style if the checkbox is disabled
							backgroundColor: disabled ? "lightgray" : "transparent",
						},
					]}
				>
					{/* Render the checkmark icon if isChecked is true */}
					{isChecked && <Check />}
				</View>

				{/* Display the label text */}
				<Text style={{ color: disabled ? "gray" : "black" }}>{label}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CheckBox;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	checkBox: {
		width: 20,
		height: 20,
		borderWidth: 1,
		borderColor: "black",
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
