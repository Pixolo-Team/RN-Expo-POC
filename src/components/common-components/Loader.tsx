// IMPORTS //
import React from "react";
import {
	ActivityIndicator,
	StyleSheet,
	View,
	Text,
	TextStyle,
	ViewStyle,
} from "react-native";

// STYLES //

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //

// SVG'S //

// Interface
interface LoaderProps {
	visible: boolean;           // Indicates whether the loader should be visible or not.
	text?: string;              // Optional loading text.
	textStyle?: TextStyle;      // Optional style for the loading text.
	containerStyle?: ViewStyle; // Optional style for the loader container.
}

/** Loader Component */
const Loader: React.FC<LoaderProps> = ({
	visible,
	text,
	textStyle,
	containerStyle,
}) => {

	// If the loader should not be visible, return null to hide it.
	if (!visible) return null;

	// Render the loader component if it should be visible.
	return (
		<View style={[styles.loaderContainer, containerStyle]}>
			<ActivityIndicator size="large" color="#0000ff" />
			{text && <Text style={[styles.loaderText, textStyle]}>{text}</Text>}
		</View>
	);
};

// Styles for the loader component.
const styles = StyleSheet.create({
	loaderContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.3)",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	loaderText: {
		marginTop: 10,
		fontSize: 16,
	},
});

export default Loader;
