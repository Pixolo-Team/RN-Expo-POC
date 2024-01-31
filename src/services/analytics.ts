import analytics from "@react-native-firebase/analytics";
import Constants from "expo-constants";

// SERVICES //
import { getDataFromAsyncStorage } from "./cache";

// ENUMS //

// TYPES //

/** Will log the analytics screen view event */
export const logPageViewEvent = async (pageName: string) => {
	const userId = (await getDataFromAsyncStorage("user"))._id;
	// Constants.appOwnership !== "expo" && analytics().logEvent("screen_view", {
	// 	user: userId,
	// 	screen: pageName,
	// 	purpose: "Viewed the screen",
	// });
};

/**  Will log the analytics events */
export const logEvents = async (
	eventName: string,
	params: Record<string, any>
) => {
	// Constants.appOwnership !== "expo" && analytics()
	// 	.logEvent(eventName, params)
	// 	.then(() => {
	// 		console.log("Event logged successfully");
	// 	})
	// 	.catch((error) => {
	// 		console.log("Event logging failed", error);
	// 	});
};