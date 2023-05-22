import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import CustomSplashScreen from "./src/features/screens/Splash.screen";
import Home from "./src/features/screens/Home.screen";
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
