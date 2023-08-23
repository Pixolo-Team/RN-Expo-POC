// IMPORTS //
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// STYLES //

// COMPONENTS //
import Loader from "../../../components/common-components/Loader";

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States
	const [loading, setLoading] = useState(false);

	// Define Refs

	// Helper Functions
	/**  Simulate a delay and show the loader (added for testing purpose) */
	const startLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000); // Simulated loading time
	};

	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			<Text>Home Screen Works</Text>

			{/** Loader for testing */}
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<TouchableOpacity onPress={startLoading} >
					<Text>Start Loading</Text>
				</TouchableOpacity>
				<Loader visible={loading} text="Loading..." />
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
