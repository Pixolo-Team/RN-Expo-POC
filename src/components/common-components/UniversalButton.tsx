import React from "react";
import { Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle,} from "react-native";

// STYLES //
import { theme } from "../../infrastructure/theme/theme";

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //

// SVG'S //

interface UniversalButtonProps {
	text: string;
	onClick?: () => void; // Add the onClick prop
	textColor?: string; // Add the textColor prop
	style?: StyleProp<ViewStyle>; // Add the style prop
}

/** Universal Button */
const UniversalButton: React.FC<UniversalButtonProps> = ({
	text,
	onClick,
	textColor = theme.colors.primary.contrast,
	style,
}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={[styles.commonBtn, style]}
			onPress={onClick} // Pass the onClick prop to the TouchableOpacity component
		>
			<Text style={[styles.commonBtnText, { color: textColor }]}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	commonBtn: {
		backgroundColor: theme.colors.primary.regular,
		padding: theme.spacing.medium,
		borderRadius: 4,
	},
	commonBtnText: {
		fontFamily: "primary-medium",
		textAlign: "center",
		color: theme.colors.primary.contrast,
		fontSize: theme.fontSizes.small,
		textTransform: "capitalize",
		letterSpacing: 1.25,
	},
});

export default UniversalButton;
