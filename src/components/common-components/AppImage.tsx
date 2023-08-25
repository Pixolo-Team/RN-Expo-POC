// IMPORTS //
import React, { useState } from "react";
import { Image, ImageStyle, ImageURISource } from "react-native";

interface AppImageProps {
	uri: any;
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
	// State declarations
	const [showDefault, setShowDefault] = useState<boolean>(false);

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
