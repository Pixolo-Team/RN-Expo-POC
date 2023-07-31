import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS //
import LoginScreen from "../../features/accounts/screens/Login.screen";
import SignupScreen from "../../features/accounts/screens/Singup.screen";
import HomeScreen from "../../features/accounts/screens/Home.screen";

// CONTEXT //
import { useAuthContext } from "../../services/context/auth.context";

const AuthStack = createStackNavigator();

/** Create the Navigation for the Auth Stack */
const AuthStackScreen: React.FC = () => {
	const { user } = useAuthContext();
	return (
		<AuthStack.Navigator initialRouteName={user ? "Home" : "Signup"}>
			{user ? (
				<>
					<AuthStack.Screen
						name="Home"
						component={HomeScreen}
						options={{ headerShown: false }}
					/>
				</>
			) : (
				<>
					<AuthStack.Screen
						name="Signup"
						component={SignupScreen}
						options={{ headerShown: false }}
					/>
					<AuthStack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
				</>
			)}
		</AuthStack.Navigator>
	);
};

export default AuthStackScreen;
