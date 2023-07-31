// IMPORTS //
import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
	id: number;
	email: string;
};

type AuthContextValue = {
	user: User | null;
	signup: (email: string, password: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
	children: React.ReactNode; // Add children prop to the component type
};

/** Login screen component */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	/** Login screen component */
	const signup = async (email: string, password: string) => {
		// Simulate API signup
		const newUser: User = { id: 1, email  };
		setUser(newUser);
		await AsyncStorage.setItem("user", JSON.stringify(newUser));
		console.log("User signed up:", newUser); // Log the user data
	};

	/** Login screen component */
	const login = async (email: string, password: string) => {
		// Simulate API login
		const loggedInUser: User = { id: 1, email };
		setUser(loggedInUser);
		await AsyncStorage.setItem("user", JSON.stringify(loggedInUser));
		console.log("User logged in:", loggedInUser); // Log the user data
	};

	return (
		<AuthContext.Provider value={{ user, signup, login }}>
			{children}
		</AuthContext.Provider>
	);
};

/** Login screen component */
export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return context;
};
