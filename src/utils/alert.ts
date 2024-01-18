import { Platform } from "react-native";

// PLUGINS //
import Toast from "react-native-root-toast";


// Constants for toast options
const toastDuration = Toast.durations.LONG;
const toastPosition = Platform.OS === "android" ? -100 : -120;
const toastHideDelay = 10000;

/**
 * Generate and display a toast message.
 * @param {string} message - The message to display in the toast.
 */
export const generateToast = (message: string) => {
	// Toast options to customize appearance and behavior
	const toastOptions = {
		duration: toastDuration,
		position: toastPosition,
		backgroundColor: "#FFFFFF",
		textColor: "#202020",
		opacity: 1,
		shadow: true,
		shadowColor: "#EDF2F5",
		animation: true,
		containerStyle: {
			borderRadius: 12,
			backgroundColor: "#E8F3F9",
		},
	};

	// Show the toast with the provided message and options
	const toast = Toast.show(message, toastOptions);

	// Hide the toast after a specified delay
	setTimeout(() => {
		Toast.hide(toast);
	}, toastHideDelay);
};
