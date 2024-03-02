// REACT //
import React from "react";

// NAVIGATION //
import { createStackNavigator } from "@react-navigation/stack";

// OTHERS //
import LoginScreen from "../../features/account/screens/Login.screen";
import SignUpScreen from "../../features/account/screens/SignUp.screen";

// SCREENS //

const AuthStackScreens = createStackNavigator();

/** Create the Navigation for the Auth Stack */
const AuthStack = () => {
	return (
		<AuthStackScreens.Navigator initialRouteName="SignUp">
			<AuthStackScreens.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<AuthStackScreens.Screen
				name="SignUp"
				component={SignUpScreen}
				options={{ headerShown: false }}
			/>
		</AuthStackScreens.Navigator>
	);
};

export default AuthStack;
