// IMPORTS //
import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

// STYLES //

// COMPONENTS //
import Header from "../../../components/common-components/Header";

// SVG //

// PLUGINS //
import { useNavigation } from "@react-navigation/native";

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States
	const navigation = useNavigation();
	// Define Refs

	// Helper Functions
	/** Function to handle back press */
	const customBackFunction = () => {
		// Your custom back function logic here
		navigation.navigate("NewScreen");
	};
	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			<Header title="Home" backFunction={customBackFunction} gap={10} />
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
