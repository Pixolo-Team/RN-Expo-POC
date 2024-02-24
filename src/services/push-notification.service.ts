// PLUGINS //
import * as Notifications from "expo-notifications";

// CONSTANTS //
import { EXPO_PROJECT_ID } from "../infrastructure/constants";

/** Register for push notifications */
export const registerForPushNotificationsAsync = async (): Promise<void> => {
	// Check if the device has push notification permissions.
	const { status: existingStatus } = await Notifications.getPermissionsAsync();
	let finalStatus = existingStatus;

	// If no permission, prompt the user for permissions
	if (existingStatus !== "granted") {
		const { status } = await Notifications.requestPermissionsAsync();
		finalStatus = status;
	}

	// If user said No to permissions
	if (finalStatus !== "granted") {
		console.log("Failed to get push token for push notification!");
		return;
	}
};

/** Get push token */
export const getPushToken = async (): Promise<string> => {
	const token = (
		await Notifications.getExpoPushTokenAsync({
			projectId: EXPO_PROJECT_ID,
		})
	).data;
	return token;
};
