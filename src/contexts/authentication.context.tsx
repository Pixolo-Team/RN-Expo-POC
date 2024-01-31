import React, { useEffect, useState } from "react";

// SERVICES //
import {
	getDataFromAsyncStorage,
	removeDataFromAsyncStorage,
} from "../services/cache";
import { verifyTokenRequest } from "../services/api/users";

// CONTEXTS //
import { useUserContext } from "./user.context";

// UTILS //

// PLUGINS //

// TYPES //
import { UserData } from "../types/user";

// Define all the state you want to share globally here
type AuthenticationState = {
	isAuthenticated: boolean;
	isLoading: boolean;
	isVerifyingUser: boolean;
};

type AuthenticationContextType = AuthenticationState & {
	setIsAuthenticated: (data: boolean) => void;
	setIsLoading: (data: boolean) => void;
	setIsVerifyingUser: (data: boolean) => void;
	loginUser: (userObject: UserData) => void;
	logout: () => void;
	// Define setters for your other state here
};

// Create the Context
const AuthenticationContext = React.createContext<
	AuthenticationContextType | undefined
>(undefined);

/** Init the Context */
export const useAuthenticationContext = () => {
	const context = React.useContext(AuthenticationContext);
	if (!context) {
		throw new Error(
			"use Authentication Context must be used within AuthenticationProvider"
		);
	}
	return context;
};

type AuthenticationProviderProps = {
	children: React.ReactNode;
};

/** Authentication Context */
export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
	children,
}) => {
	// Define States
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isVerifyingUser, setIsVerifyingUser] = useState<boolean>(false);

	// Define Contexts
	const { user, setUser } = useUserContext();

	// Helper Functions
	/** Logout the User */
	const logout = async () => {
		// Make the Logout API Request
		setIsAuthenticated(false);
		setUser(null);
		removeDataFromAsyncStorage("user");
	};

	/** Login a User */
	const loginUser = async (userObject: UserData) => {
		setUser(userObject);
		setIsAuthenticated(true);
	};

	/** Check if the user is logged in */
	const checkLoggedIn = async () => {
		try {
			// Check if the user is logged in
			setIsVerifyingUser(true);
			const userObject = await getDataFromAsyncStorage("user");

			if (userObject && userObject.token) {
				const token = userObject.token;
				const response = await verifyTokenRequest(token);

				if (response.status) {
					// Every time user logs in new data will be fetched
					const userData = {
						...(response.data as unknown as UserData),
						token: token,
					};
					setUser(userData);
					setIsAuthenticated(true);
				} else {
					// If the Token is invalid then Logout the user
					logout();
				}
			}

			setIsVerifyingUser(false);
		} catch (error) {
			// Handle any errors that occur during the asynchronous operations
			console.error("Error checking login:", error);
			setIsVerifyingUser(false);
		}
	};

	// useEffect
	useEffect(() => {
		checkLoggedIn();
	}, []);

	// Add the setters to the value passed to the provider
	const value: AuthenticationContextType = {
		isAuthenticated,
		setIsAuthenticated,
		isLoading,
		setIsLoading,
		isVerifyingUser,
		setIsVerifyingUser,
		loginUser,
		logout,
		// Add your other state and setters here
	};

	return (
		<AuthenticationContext.Provider value={value}>
			{children}
		</AuthenticationContext.Provider>
	);
};
