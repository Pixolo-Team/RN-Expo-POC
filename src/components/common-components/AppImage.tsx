// IMPORTS //
import React, { useState } from "react";
import { Image, ImageStyle, ImageURISource } from "react-native";

// STYLES //

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //

// SVG'S //

interface AppImageProps {
	uri: string;
	style?: ImageStyle;
	defaultSource: ImageURISource;
	resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
}
/** App Image */
const AppImage: React.FC<AppImageProps> = ({
	uri,
	style,
	defaultSource,
	resizeMode = "cover",
}) => {
	// Define Contexts

	// Define States
	const [showDefault, setShowDefault] = useState<boolean>(false);

	// Define Refs

	// Helper Functions
	/** Handle Load Error */
	const handleLoadError = () => {
		console.log("error");
		setShowDefault(true);
	};

	// Get the Image source based on Show Default State
	const imageSource = !uri || showDefault ? defaultSource : { uri };

	return (
		<Image
			style={style}
			source={imageSource}
			onError={handleLoadError}
			resizeMode={resizeMode}
		/>
	);
};

export default AppImage;
