// IMPORTS //
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, StyleSheet, Text,Button } from "react-native";

// STYLES //

// COMPONENTS //

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const About: React.FC = () => {
	const nav=useNavigation();
	const route=useRoute();
	const {name}=route.params;
	// Define Contexts

	// Define States

	// Define Refs

	// Helper Functions

	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			<Text style={styles.font}>About us</Text>
			<Button title={name} onPress={()=>nav.goBack()} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent:"center",
	},
	font:{
		color:"red",
		textAlign:"center",
		margin:20
	},
	button:{
		marginTop:100
	}
});

export default About;
