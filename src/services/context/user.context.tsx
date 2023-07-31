import React, { createContext, useContext } from "react";

// Define the user context shape
interface UserContextType {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface User {
	// Define user properties here
	id: number;
	email: string;
	// ... other user-related properties
}

const UserContext = createContext<UserContextType | undefined>(undefined);

/** Login button click */
export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context;
};

export default UserContext;
