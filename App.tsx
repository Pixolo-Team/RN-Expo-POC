// IMPORTS //
import React from "react";

// Import the reaact-navigation library for navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens //
import Home from "./src/features/home/screens/Home.screen";
import CustomSplashScreen from "./src/features/splashscreen/screens/Splash.screen";

// Navigation Stack
const Stack = createStackNavigator();

/** App */
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Splash">
				{/* SplashScreen Screen */}
				<Stack.Screen
					name="Splash"
					component={CustomSplashScreen}
					options={{ headerShown: false }}
				/>
				{/* Home Screen */}
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
