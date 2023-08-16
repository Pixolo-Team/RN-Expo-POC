import { useFonts } from "expo-font";

// Import IBM Plex font
const ibmPlexRegular = require("../../../assets/fonts/ibm-plex-sans/ibm-plex-sans-regular.ttf");
const ibmPlexMedium = require("../../../assets/fonts/ibm-plex-sans/ibm-plex-sans-medium.ttf");
const ibmPlexSemiBold = require("../../../assets/fonts/ibm-plex-sans/ibm-plex-sans-semibold.ttf");
const ibmPlexBold = require("../../../assets/fonts/ibm-plex-sans/ibm-plex-sans-bold.ttf");

/** Load the font files */
export const loadFonts = () => {
	return useFonts({
		"primary-regular": ibmPlexRegular,
		"primary-medium": ibmPlexMedium,
		"primary-semibold": ibmPlexSemiBold,
		"primary-bold": ibmPlexBold,
	});
};

export const fontType = {
	regular: "primary-regular",
	medium: "primary-medium",
	semibold: "primary-semibold",
	bold: "primary-bold",
};

// Variable for Font Sizes
export const fontSizes = {
	xtiny: 10,
	tiny: 12,
	small: 14,
	medium: 15,
	regular: 16,
	large: 20,
	xlarge: 24,
};
