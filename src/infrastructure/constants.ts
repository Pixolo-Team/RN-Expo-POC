// REACT NATIVE //
import { Dimensions, Platform } from "react-native";

// Define constant values
export const CONSTANTS = {
	WINDOW_HEIGHT: Dimensions.get("window").height,
	WINDOW_WIDTH: Dimensions.get("window").width,
	OS: Platform.OS,
	IS_ANDROID: Platform.OS === "android",
	IS_IOS: Platform.OS === "ios",
	VERSION: Platform.Version,
};

// API URL
export const API_URL = "https://api.pixoloproductions.com/";

// Project ID
export const PROJECT_ID = "f1f198ea-f5cd-49f4-9edf-eaa985d015d5";
