// IMPORTS //
import React from "react";
import { View, StyleSheet, Text } from "react-native";

// STYLES //

// COMPONENTS //
import Slider from "../../../components/common-components/Slider/Slider";

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States

	// Define Refs

	// Helper Functions
	/** Add files to the Array */
	const addFile = () => {
		console.log("Add files"); // TO DO : Add code to handle adding files
	};

	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			<Text>Home Screen Works</Text>

			{/** Slider Component for testing */}
			<View style={{ flex: 1, padding: 20 }}>
				<Slider onAddFileClick={addFile} />
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
