import { StatusBar } from "react-native";
import { Dimensions } from "react-native";

//added for Testing Purpose
// eslint-disable-next-line @typescript-eslint/naming-convention
export const API_URL = "https://gcc.oceantg.com/";  //TODO: add original 

export const statusBarHeight = StatusBar.currentHeight || 0; // get the height of the status bar

export const CONSTANTS = {
	WINDOW_HEIGHT: Dimensions.get("window").height,
	WINDOW_WIDTH: Dimensions.get("window").width,
	IS_ANDROID: true

};