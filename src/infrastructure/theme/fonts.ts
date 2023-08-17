import { useFonts } from "expo-font";

// // Import fonts
// import DM_SANS_BOLD from "../../../assets/fonts/dm-sans/dm-sans-bold.ttf";
// import DM_SANS_BOLD_ITALIC from "../../../assets/fonts/dm-sans/dm-sans-bold-italic.ttf";
// import DM_SANS_ITALIC from "../../../assets/fonts/dm-sans/dm-sans-italic.ttf";
// import DM_SANS_MEDIUM from "../../../assets/fonts/dm-sans/dm-sans-medium.ttf";
// import DM_SANS_MEDIUM_ITALIC from "../../../assets/fonts/dm-sans/dm-sans-medium-italic.ttf";
// import DM_SANS_REGULAR from "../../../assets/fonts/dm-sans/dm-sans-regular.ttf";

// /** Load Fonts */
// export const loadFonts = () => {
// 	return useFonts({
// 		"primary-bold": DM_SANS_BOLD,
// 		"primary-bold-italic": DM_SANS_BOLD_ITALIC,
// 		"primary-italic": DM_SANS_ITALIC,
// 		"primary-medium": DM_SANS_MEDIUM,
// 		"primary-medium-italic": DM_SANS_MEDIUM_ITALIC,
// 		"primary-regular": DM_SANS_REGULAR,
// 	});
// };

export const font = {
	primary: {
		bold: "primary-bold",
		boldItalic: "primary-bold-italic",
		italic: "primary-italic",
		medium: "primary-medium",
		mediumItalic: "primary-medium-italic",
		regular: "primary-regular",
	},
};

// Variable for Font Sizes
export const fontSizes = {
	tiny: 10,
	xsmall: 12,
	small: 14,
	regular: 16,
	medium: 18,
	large: 20,
	xlarge: 26,
	xxlarge: 34,
};
