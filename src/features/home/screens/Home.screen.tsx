// IMPORTS //
import React, { useState } from "react";
import { View } from "react-native";

// STYLES //

// COMPONENTS //
import Button from "../../../components/common-components/Button";
import CheckBox from "../../../components/common-components/CheckBox";

// SVG //
import Close from "../../../../assets/icons/close.svg";

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// States
	const [isChecked, setIsChecked] = useState(false);

	// Helper functions
	/** On click Button */
	const handleButtonPress = () => {
		// Handle button press logic here
		console.log("Button Pressed");
	};

	/** Function to toggle the checkbox state when it's pressed */
	const toggleCheckbox = () => {
		setIsChecked((prevState) => !prevState);
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

			{/* Custom Checkbox */}
			<View
				style={{
					height: 100,
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<CheckBox 
					label="Checkbox 1" 
					checked={isChecked} 
					onPress={toggleCheckbox} 
				/>
			</View>
		</View>
	);
};

export default HomeScreen;
