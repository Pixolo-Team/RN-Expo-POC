import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS //
import HomeScreen from "../../features/home/screens/Home.screen";
import ExampleScreen from "../../features/documentation/screens/Example.screen";

const AuthStack = createStackNavigator();

/** Create the Navigation for the Auth Stack */
const AuthStackScreen: React.FC = () => {
	return (
		<AuthStack.Navigator initialRouteName={"Example"}>
			<AuthStack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>

			<AuthStack.Screen
				name="Example"
				component={ExampleScreen}
				options={{ headerShown: false }}
			/>
		</AuthStack.Navigator>
	);
};

export default AuthStackScreen;
