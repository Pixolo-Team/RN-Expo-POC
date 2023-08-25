// IMPORTS //
import React from "react";
import { View, StyleSheet, Text } from "react-native";

// STYLES //

// COMPONENTS //
import AppImage from "../../../components/common-components/AppImage";

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States
	// Dummy URL for testing the image component
	const dummyUrl =
		"https://freepngimg.com/thumb/doraemon/35004-7-doraemon-transparent-image.png";

	// Define Refs

	// Helper Functions

	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			<Text>Home Screen Works</Text>

			{/** Image Component for testing */}
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
