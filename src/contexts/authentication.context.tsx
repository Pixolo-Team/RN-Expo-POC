// REACT //
import React, { useEffect, useMemo, useState } from "react";

// TYPES //
import { UserData } from "../types/users";
import { ApiResponseData } from "../types/app";
import { LoginInputData } from "../types/account";

// ENUMS //
import { LocalStorageKeys } from "../enums/local-storage";

// API SERVICES //
import {
	loginRequest,
	logoutRequest,
	verifyTokenRequest,
} from "../services/api/users.api-service";

// SERVICES //
import {
	flushLocalStorage,
	getDataFromLocalStorage,
	setDataInLocalStorage,
} from "../services/local-storage.service";

// CONTEXTS //
import { useUserContext } from "./user.context";

// Define all the state you want to share globally here
type AuthenticationState = {
	isAuthenticated: boolean;
	isAuthLoading: boolean;
};

type AuthenticationContextType = AuthenticationState & {
	login: (user: LoginInputData) => Promise<{ status: boolean; message: string }>;
	logout: () => Promise<void>;
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
	const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);

	// Define Contexts
	const { user, setUser } = useUserContext();

	// Helper Functions
	/** Logout the User Locally (within the App) */
	const logoutLocally = (): void => {
		setIsAuthenticated(false);
		setUser(null);
		flushLocalStorage();
	};

	/** Logout the User */
	const logout = async (): Promise<void> => {
		// Make the Logout API Request
		logoutRequest(user?._id ?? "")
			.then((response: ApiResponseData<boolean>) => {
				if (response.status) {
					// Logout the User from the App (Locally on Phone)
					logoutLocally();
				}
			})
			.catch((error: any) => {
				console.log(error);
			});
	};

	/** Login a User */
	const login = async (
		userInput: LoginInputData
	): Promise<{ status: boolean; message: string }> => {
		// Set the verifying user state to true
		setIsAuthLoading(true);

		// Make API Call to login the User
		try {
			const loginResponse = await loginRequest(
				userInput.email_input ?? "",
				userInput.password_input ?? ""
			);
			if (loginResponse.status) {
				// Login the User locally within the App
				loginLocally(loginResponse.data.user, loginResponse.data.token);
				setIsAuthLoading(false);
				return {
					status: true,
					message: "User Logged In Successfully",
				};
			} else {
				// If the User was not successfully Logged In
				setIsAuthLoading(false);
				return {
					status: false,
					message: "User not Logged In",
				};
			}
		} catch (error: any) {
			// If the API returned an unexpected Error
			console.log(error);
			setIsAuthLoading(false);
			return {
				status: false,
				message: "Error Logging In",
			};
		}
	};

	/** Login the Usr Locally (within the App) */
	const loginLocally = async (user: UserData, token: string): Promise<void> => {
		// Save the User and Token to Local Storage
		await setDataInLocalStorage(LocalStorageKeys.USER, user);
		await setDataInLocalStorage(LocalStorageKeys.TOKEN, token);
		setUser(user);
		setIsAuthenticated(true);
	};

	/** Check if the user is logged in */
	const checkLoggedIn = async (): Promise<void> => {
		try {
			// Start the Verification Pro
			setIsAuthLoading(true);
			const userObject = await getDataFromLocalStorage(LocalStorageKeys.USER);
			const token = await getDataFromLocalStorage(LocalStorageKeys.TOKEN);

			if (userObject && token) {
				// Verify the token
				verifyTokenRequest(token)
					.then((response: ApiResponseData<UserData>) => {
						// Stop the Verification Loader
						setIsAuthLoading(false);
						if (response.status) {
							loginLocally(response.data, token);
						} else {
							logout();
						}
					})
					.catch((error: any) => {
						console.log(error);
					});
			}
		} catch (error) {
			// Handle any errors that occur during the asynchronous operations
			console.error("Error checking login:", error);
			setIsAuthLoading(false);
		}
	};

	// useEffect
	useEffect(() => {
		checkLoggedIn();
	}, []);

	// Add the setters to the value passed to the provider
	const value = useMemo<AuthenticationContextType>(
		() => ({
			isAuthenticated,
			isAuthLoading,
			login,
			logout,
			// Add your other state and setters here
		}),
		[isAuthenticated, isAuthLoading, login, logout] // Dependency array
	);

	return (
		<AuthenticationContext.Provider value={value}>
			{children}
		</AuthenticationContext.Provider>
	);
};
