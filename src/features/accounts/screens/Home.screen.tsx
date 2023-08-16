// IMPORTS //
import React from "react";
import { View, Text } from "react-native";

// STYLES //
import { theme } from "../../../infrastructure/theme/theme";

// COMPONENTS //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// States

	// Helper functions

	// View starts
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: theme.colors.primary.regular, // used theme color
			}}
		>
			<Text
				style={{
					fontSize: theme.fontSizes.xlarge, //used fontsize from theme 
					fontFamily: theme.fontType.bold, 
				}}
			>
				Hello , Welcome to Home Screen
			</Text>
		</View>
	);
};

export default HomeScreen;
