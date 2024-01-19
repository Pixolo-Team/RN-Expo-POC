import { Dimensions, Platform } from "react-native";

export const CONSTANTS = {
	WINDOW_HEIGHT: Dimensions.get("window").height,
	WINDOW_WIDTH: Dimensions.get("window").width,
	OS: Platform.OS,
	IS_ANDROID: Platform.OS === "android",
	IS_IOS: Platform.OS === "ios",
	VERSION: Platform.Version,
	RESEND_REFRESH_TIME: 60,
	MESSAGES_LIMIT: 50,
	BIG_DATA_FETCH_THRESHOLD: 5,
	SMALL_FETCH_THRESHOLD: 2,
};

export const API_URL = "https://api.pixoloproductions.com/";
