import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../features/home/screens/Home.screen";
import SignupScreen from "../../features/accounts/screens/Signup.Screen";

// SCREENS //

const AuthStack = createStackNavigator();

/** Create the Navigation for the Auth Stack */
const AuthStackScreen: React.FC = () => {
	return (
		<AuthStack.Navigator initialRouteName={"Sign"} >
			<AuthStack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false}}
			/>
			<AuthStack.Screen
				name="Sign"
				component={SignupScreen}
				options={{ headerShown: false}}
			/>
			
		</AuthStack.Navigator>
	);
};

export default AuthStackScreen;
