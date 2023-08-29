// IMPORTS //
import * as Font from "expo-font";

/** Load the font files */
export const loadCustomFonts = async () => {
	await Font.loadAsync({
		"Inter-Black": require("../../../assets/fonts/Inter/static/Inter-Black.ttf"),
		"Oswald-Bold": require("../../../assets/fonts/Inter/static/Inter-Bold.ttf"),
		"Roboto-BoldItalic": require("../../../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
		// Add more fonts here
	});
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
