// IMPORTS //
import React from "react";
import { View } from "react-native";

// STYLES //

// COMPONENTS //
import Button from "../../../components/common-components/Button";

// SVG //
import Close from "../../../../assets/icons/close.svg";

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// States

	// Helper functions
	/** On click Button */
	const handleButtonPress = () => {
		// Handle button press logic here
		console.log("Button Pressed");
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
		</View>
	);
};

export default HomeScreen;
