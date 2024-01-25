// IMPORTS //
import React from "react";
import { View, StyleSheet, Text,Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// STYLES //

// COMPONENTS //

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	const nav=useNavigation();
	// Define Contexts

	// Define States

	// Define Refs

	// Helper Functions

	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			<Text style={styles.font}>Home Screen Works</Text>
			<Button title="To Next Page" onPress={()=>nav.push("About",{name:"Pratham"})} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent:'center'
	},
	font:{
		color:'red',
		textAlign:'center',
		margin:20
	},
	button:{
		marginTop:100
	}
});

export default HomeScreen;
