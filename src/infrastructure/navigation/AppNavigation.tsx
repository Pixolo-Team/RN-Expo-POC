// REACT //
import React from "react";

// REACT NATIVE //
import { StatusBar } from "react-native";

// CONTEXTS //
import { useAuthenticationContext } from "../../contexts/authentication.context";

// UTILS //
import { CONSTANTS } from "../constants";

// NAVIGATION //
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// STACKS //
import AuthStack from "./AuthStack";

// SCREENS //
import HomeScreen from "../../features/home/screens/Home.screen";

const RootStack = createStackNavigator();

/** App Navigation */
const AppNavigation = () => {
	// Define Contexts
	const { isAuthenticated } = useAuthenticationContext();

	return (
		<NavigationContainer>
			{/* If Android then show the Custom Status Bar */}
			{CONSTANTS.IS_ANDROID && (
				<StatusBar
					barStyle="light-content"
					backgroundColor="transparent"
					translucent
				/>
			)}

			{/* If User is Authenticated then show the Auth Stack else show the Home Screen */}
			{!isAuthenticated ? (
				<RootStack.Navigator>
					<RootStack.Screen
						name="Account"
						component={AuthStack}
						options={{ headerShown: false }}
					/>
				</RootStack.Navigator>
			) : (
				<RootStack.Navigator>
					<RootStack.Screen
						name="Home"
						component={HomeScreen}
						options={{ headerShown: false }}
					/>
				</RootStack.Navigator>
			)}
		</NavigationContainer>
	);
};

export default AppNavigation;
