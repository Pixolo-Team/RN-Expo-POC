import React from "react";
import { StatusBar } from "react-native";

// NAVIGATION //
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// CONTEXTS //
import { useAuthenticationContext } from "../../contexts/authentication.context";

// STACKS //
import AuthStack from "./AuthStack";

// SCREENS //

// UTILS //
import { CONSTANTS } from "../constants";

// SCREENS //
import HomeScreen from "../../features/home/screens/Home.screen";

// CONTEXTS //

const RootStack = createStackNavigator();

/** App Navigation */
const AppNavigation = () => {
	// Define Contexts
	const { isAuthenticated, isAuthLoading } = useAuthenticationContext();

	return !isAuthLoading ? (
		<NavigationContainer>
			{CONSTANTS.IS_ANDROID && (
				<StatusBar
					barStyle="light-content"
					backgroundColor="transparent"
					translucent
				/>
			)}
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
	) : (
		<></>
	);
};

export default AppNavigation;
