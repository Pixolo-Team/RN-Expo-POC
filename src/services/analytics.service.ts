// PLUGINS //
import analytics from "@react-native-firebase/analytics";

// ENUMS //
import { LocalStorageKeys } from "../enums/local-storage";

// SERVICES //
import { getDataFromLocalStorage } from "./local-storage.service";

// UTILS //
import Constants from "expo-constants";

/** Will log the analytics screen view event */
export const logPageViewEvent = async (pageName: string) => {
	const userId = (await getDataFromLocalStorage(LocalStorageKeys.USER))._id;
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