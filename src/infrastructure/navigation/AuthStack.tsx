// REACT //
import React from "react";

// NAVIGATION //
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS //
import LoginScreen from "../../features/account/screens/Login.screen";

const AuthStackScreens = createStackNavigator();

/** Create the Navigation for the Auth Stack */
const AuthStack = () => {
	return (
		<AuthStackScreens.Navigator initialRouteName="Login">
			<AuthStackScreens.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
		</AuthStackScreens.Navigator>
	);
};

export default AuthStack;
