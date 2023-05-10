import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Import the reaact-navigation library for navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SplashScreen from "./src/features/screens/Splash.screen"
import Home from "./src/features/screens/Home.screen"
// Navigation Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      {/* SplashScreen Screen */}
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
