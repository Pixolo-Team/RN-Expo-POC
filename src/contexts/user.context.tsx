// REACT //
import React, {
	Dispatch,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

// TYPES //
import { UserData } from "../types/users";

// ENUMS //
import { LocalStorageKeys } from "../enums/local-storage.enum";

// SERVICES //
import { setDataInLocalStorage } from "../services/local-storage.service";

// Define all the state you want to share globally here
type UserState = {
	user: Partial<UserData> | null;
	// Add more state as needed
};

type UserContextType = UserState & {
	setUser: Dispatch<React.SetStateAction<Partial<UserData> | null>>;
	// Define setters for your other state here
};

// Create the Context
const UserContext = createContext<UserContextType | undefined>(undefined);

/** Init the Context */
export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("use User Context must be used within UserProvider");
	}
	return context;
};

type UserProviderProps = {
	children: React.ReactNode;
};

/** User Context */
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
	// Define States
	const [user, setUser] = useState<UserData | null>(null);
	// Initialize your other state here

	// Define Setters

	// Add the setters to the value passed to the provider
	const value: UserContextType = useMemo(() => {
		return {
			user,
			setUser,
		};
	}, [user]);

	useEffect(() => {
		if (user !== undefined && user !== null)
			setDataInLocalStorage(LocalStorageKeys.USER, user);
	}, [user]);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
