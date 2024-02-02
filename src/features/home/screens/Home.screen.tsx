// IMPORTS //
import React from "react";
import { View, StyleSheet, Text,Button } from "react-native";

// STYLES //
import { styles } from "../components/home.styles";

// COMPONENTS //

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	const navigation=useNavigation();
	// Define Contexts

	// Define States

	// Define Refs

	// Helper Functions

	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			<Text style={styles.font}>Home Screen Works</Text>
			<Button title="To Next Page" onPress={()=>navigation.push("About",{name:"Pratham"})} />
		</View>
	);
};

export default HomeScreen;
