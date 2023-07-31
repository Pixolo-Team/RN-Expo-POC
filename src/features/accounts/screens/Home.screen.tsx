// IMPORTS //
import React from "react";
import { View, Text } from "react-native";

// STYLES //

// COMPONENTS //

// PLUGINS //

// CONTEXT //
import { useAuthContext } from "../../../services/context/auth.context";

/** Home screen component */
const HomeScreen: React.FC = () => {
	// States
	const { user } = useAuthContext();

	// Helper functions

	// View starts
	return (
		<View style={{flex:1,justifyContent:"center",alignContent:"center",alignItems:"center"}}>
			<Text>Welcome, {user?.email}!</Text>
		</View>
	);
};

export default HomeScreen;
