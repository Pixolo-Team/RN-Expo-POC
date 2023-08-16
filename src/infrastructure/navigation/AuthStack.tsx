import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS //
import HomeScreen from "../../features/accounts/screens/Home.screen";

const AuthStack = createStackNavigator();

/** Create the Navigation for the Auth Stack */
const AuthStackScreen: React.FC = () => {
	return (
		<AuthStack.Navigator initialRouteName={"Home"}>
			<AuthStack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
		</AuthStack.Navigator>
	);
};

export default AuthStackScreen;
