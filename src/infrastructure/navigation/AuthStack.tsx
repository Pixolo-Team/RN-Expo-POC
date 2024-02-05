// REACT //
import React from "react";

// NAVIGATION //
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS //
import HomeScreen from "../../features/home/screens/Home.screen";
import SignUpScreen from "../../features/account/screens/Signup.Screen";

const AuthStack = createStackNavigator();

/** Create the Navigation for the Auth Stack */
const AuthStackScreen: React.FC = () => {
	return (
		<AuthStack.Navigator initialRouteName={"Sign"}>
			<AuthStack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<AuthStack.Screen
				name="Sign"
				component={SignUpScreen}
				options={{ headerShown: false }}
			/>
		</AuthStack.Navigator>
	);
};

export default AuthStackScreen;
