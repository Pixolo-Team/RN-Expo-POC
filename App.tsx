import React, { useCallback } from "react";
import { View } from "react-native";

// NAVIGATION //
import AppNavigation from "./src/infrastructure/navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

// PROVIDERS //

// STYLES //

// COMPONENTS //

// CONTEXTS //

// SERVICES //

// PLUGINS //
import * as SplashScreen from "expo-splash-screen";

// UTILS //
import { loadFonts } from "./src/infrastructure/theme/fonts";

// SVG'S //

// Prevent the Splash Screen from hiding
SplashScreen.preventAutoHideAsync();

/** App Component */
const App: React.FC = () => {
	// Load Fonts
	const [fontsLoaded] = loadFonts();
	// Define States

	// Define Refs

	// Helper Functions

	// Use Effect and Focus Effect

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<View onLayout={onLayoutRootView}></View>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</>
	);
};

export default App;
