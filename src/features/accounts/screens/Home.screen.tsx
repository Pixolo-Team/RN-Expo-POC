// IMPORTS //
import React from "react";
import { View } from "react-native";

// STYLES //
import { theme } from "../../../infrastructure/theme/theme";

// COMPONENTS //
import Button from "../components/Button";

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
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: theme.colors.primary.light,
			}}
		>
			{/* Custom Button Added */}
			<Button
				icon={<Close width={20} height={20} />}
				text="Custom Button"
				backgroundColor="secondary"
				borderColor="secondary"
				onClick={handleButtonPress}
				size="big"
				mode="block"
				showButtonLoader={false}
			></Button>
		</View>
	);
};

export default HomeScreen;
