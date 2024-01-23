import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS //
import HomeScreen from "../../features/home/screens/Home.screen";
import About from "../../features/about/screens/About.screen";
import { useNavigation } from "@react-navigation/native";

const AuthStack = createStackNavigator();


/** Create the Navigation for the Auth Stack */
const AuthStackScreen: React.FC = () => {
	const nav2=useNavigation();
	return (
		<AuthStack.Navigator initialRouteName={"Home"} >
			<AuthStack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false}}
			/>
			<AuthStack.Screen
				name="About"
				component={About}
				options={{ headerShown: false}}
			/>
			
		</AuthStack.Navigator>
	);
};

export default AuthStackScreen;
