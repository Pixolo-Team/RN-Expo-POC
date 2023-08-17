import { useFonts } from "expo-font";

// Import Inter fonts
// import InterBlack from "../../../assets/fonts/Inter-Bold.ttf";
// import InterBold from "../../../assets/fonts/Inter-Bold.ttf";
// import InterExtraBold from "../../../assets/fonts/Inter-ExtraBold.ttf";
// import InterExtraLight from "../../../assets/fonts/Inter-ExtraLight.ttf";
import InterLight from "../../../assets/fonts/Inter-Light.ttf";
import InterMedium from "../../../assets/fonts/Inter-Medium.ttf";
import InterRegular from "../../../assets/fonts/Inter-Regular.ttf";
import InterSemiBold from "../../../assets/fonts/Inter-SemiBold.ttf";
// import InterThin from "../../../assets/fonts/Inter-Thin.ttf";
import InterThin from "../../../assets/fonts/Inter-Thin.ttf";

/** Load the font files */
// export const loadFonts = () => {
// 	return useFonts({
// 		"black": InterBlack,
// 		"bold": InterBold,
// 		"extraBold": InterExtraBold,
// 		"extraLight": InterExtraLight,
// 		"light": InterLight,
// 		"medium": InterMedium,
// 		"regular": InterRegular,
// 		"semiBold": InterSemiBold,
// 		"thin": InterThin,
// 	});
// };

// Import IBM Plex font
const interBlack = require("../../../assets/fonts/Inter-Black.ttf");
const interBold = require("../../../assets/fonts/Inter-Bold.ttf");
const InterExtraBold = require("../../../assets/fonts/Inter-ExtraBold.ttf");
const InterExtraLight = require("../../../assets/fonts/Inter-Light.ttf");

/** Load the font files */
export const loadFonts = () => {
	return useFonts({
		"primary-regular": interBlack,
		"primary-medium": interBold,
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
