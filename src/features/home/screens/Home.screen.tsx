// IMPORTS //
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

// STYLES //
import { loadCustomFonts } from "../../../infrastructure/theme/theme";

// COMPONENTS //

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States
	const [fontsLoaded, setFontsLoaded] = useState(false);

	// Define Refs

	// Helper Functions
	/**  Load custom fonts asynchronously and set the state when done. */
	const loadFontsAsync = async () => {
		// Load custom fonts using the imported function
		await loadCustomFonts();
		// Set the 'fontsLoaded' state to true when fonts are loaded
		setFontsLoaded(true);
	};

	// Use Effect and Focus Effect
	useEffect(() => {
		// Call the loadFontsAsync function when the component is mounted
		loadFontsAsync();
	}, []);

	// If fonts are not loaded yet, show a loading message
	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	// View starts
	return (
		<View style={styles.container}>
			<Text>Home Screen Works</Text>

			{/** Added Fonts for testing */}
			<Text style={{ fontFamily: "Inter-Black", fontSize: 16 }}>
				This is Inter Regular
			</Text>
			<Text style={{ fontFamily: "Oswald-Bold", fontSize: 16 }}>
				This is primary-oswald-bold
			</Text>
			<Text style={{ fontFamily: "Roboto-BoldItalic", fontSize: 16 }}>
				This is Roboto-BoldItalic
			</Text>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default HomeScreen;
