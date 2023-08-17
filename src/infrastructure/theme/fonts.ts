import { useFonts } from "expo-font";

// Import IBM Plex font
const interBlack = require("../../../assets/fonts/Inter-Black.ttf");
const interBold = require("../../../assets/fonts/Inter-Bold.ttf");
const InterExtraBold = require("../../../assets/fonts/Inter-ExtraBold.ttf");
const InterExtraLight = require("../../../assets/fonts/Inter-Light.ttf");
const interLight = require("../../../assets/fonts/Inter-Light.ttf");
const interMedium = require("../../../assets/fonts/Inter-Medium.ttf");
const interRegular = require("../../../assets/fonts/Inter-Regular.ttf");
const interSemiBold = require("../../../assets/fonts/Inter-SemiBold.ttf");
const interThin = require("../../../assets/fonts/Inter-Thin.ttf");

/** Load the font files */
export const loadFonts = () => {
	return useFonts({
		"primaryregular": interBlack,
		"primarymedium": interBold,
		"primary-semibold": InterExtraBold,
		"primary-bold": InterExtraLight,
	});
};

// export const fontType = {
// 	regular: "black",
// 	medium: "medium",
// 	semibold: "semiBold",
// 	bold: "bold",
// };

// Variable for Font Sizes
export const fontSizes = {
	xtiny: 10,
	tiny: 12,
	small: 14,
	medium: 18,
	regular: 16,
	large: 20,
	xlarge: 24,
};
