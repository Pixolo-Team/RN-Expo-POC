// IMPORTS //
import React from "react";
import { View,} from "react-native";

// STYLES //

// COMPONENTS //
import Button from "../components/Button";

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
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor:"green"
			}}
		>
			{/* Custom Button Added */}
			<Button
				text="Custom Button"
				backgroundColor="secondary"
				borderColor="secondary"
				onClick={handleButtonPress}
				size="big"
				mode="block"
				showButtonLoader={false}
			/>
		</View>
	);
};

export default HomeScreen;
