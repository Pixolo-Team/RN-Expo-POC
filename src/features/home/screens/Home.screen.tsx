// IMPORTS //
import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

// STYLES //

// COMPONENTS //
import Header from "../../../components/common-components/Header";

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States

	// Define Refs

	// Helper Functions
	/** Function to handle back press, added for testing */
	const customBackFunction = () => {
		Alert.alert("Back button pressed");
	};
	
	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			
			{/** Header for testing */}
			<Header title="Header" backFunction={customBackFunction}/>

			<Text>Home Screen Works</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
