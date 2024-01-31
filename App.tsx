import React from "react";

// NAVIGATION //
import AppNavigation from "./src/infrastructure/navigation/AppNavigation";

// PROVIDERS //
import { UserProvider } from "./src/contexts/user.context";
import { AuthenticationProvider } from "./src/contexts/authentication.context";

// PROVIDERS //

// STYLES //

// COMPONENTS //

// CONTEXTS //

// SERVICES //

// PLUGINS //

// UTILS //

// SVG'S //

/** App Component */
const App: React.FC = () => {
	// Define States

	// Define Refs

	// Helper Functions

	// Use Effect and Focus Effect

	return (
		<UserProvider>
			<AuthenticationProvider>
				<AppNavigation />
			</AuthenticationProvider>
		</UserProvider>
	);
};

export default App;
