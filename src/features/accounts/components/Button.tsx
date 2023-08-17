import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

// STYLES//
import { theme } from "../../../infrastructure/theme/theme";

// COMPONENTS //
import { startScaleAnimation } from "./scaleBounce";

// SERVICES //

// UTILS //

// PLUGINS //
import Animated, {
	useSharedValue,
	useAnimatedStyle,
} from "react-native-reanimated";

// SVG'S //

interface ButtonProps {
	disabled?: boolean;
	text?: string;
	backgroundColor?: string;
	borderColor?: string;
	onClick?: () => void;
	size?: string;
	mode?: string;
	icon?: any;
	showButtonLoader?: boolean;
}

/** Button Component */
const Button: React.FC<ButtonProps> = ({
	disabled = false,
	text,
	backgroundColor = "primary",
	borderColor = "primary",
	onClick,
	size = "big",
	mode,
	icon,
	showButtonLoader = false,
}) => {
	// -- Animation -- //
	// The bounce Scale Animation Value
	const scaleValue = useSharedValue(1);
	// The CSS Property
	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: scaleValue.value }],
		};
	});
	// -- End of Animation -- //

	// Define Refs

	// Determine the appropriate button size based on the specified size prop
	const buttonSize = styles[size];
	// Determine the appropriate font size for the button text based on the specified size prop
	const buttonFontSize = styles[size + "text"];

	// Use Effect and Focus Effect

	return (
		<Animated.View style={[styles.buttonWrap, animatedStyle]}>
			<TouchableOpacity
				onPress={() => {
					startScaleAnimation(scaleValue);
					onClick && onClick();
				}}
				activeOpacity={0.8}
				style={[
					styles.commonButton,
					{
						backgroundColor: theme.colors[backgroundColor].regular,
						borderColor:
							disabled || showButtonLoader
								? theme.colors.dark.disabled
								: theme.colors[borderColor].regular,
					},
					buttonSize,
					mode === "block" && styles.blockButton,
					(disabled || showButtonLoader) && styles.disabledButton,
				]}
				disabled={disabled || showButtonLoader}
			>
				{/** If Loading show loading animation */}
				{showButtonLoader ? (
					<>
						<Text
							style={[
								styles.commonButtonText,
								{
									color: theme.colors[backgroundColor].contrast,
									opacity: 0,
								},
								buttonFontSize,
								mode === "block" && styles.blockButtonText,
							]}
						>
							{text}
						</Text>
					</>
				) : (
					<View style={styles.buttonContent}>
						{icon && <View style={styles.iconWrapper}>{icon}</View>}
						<Text
							style={[
								styles.commonButtonText,
								{
									color: theme.colors[backgroundColor].contrast,
								},
								buttonFontSize,
								mode === "block" && styles.blockButtonText,
							]}
						>
							{text}
						</Text>
					</View>
				)}
			</TouchableOpacity>
		</Animated.View>
	);
};

const styles: any = StyleSheet.create({
	buttonWrap: {
		alignItems: "center",
	},
	commonButton: {
		backgroundColor: theme.colors.primary.regular,
		borderRadius: 32,
		borderWidth: 1.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignContent:"center"
	},
	commonButtonText: {
		fontFamily: theme.font.primary.medium,
		textAlign: "center",
		margin: 5,
	},
	disabledButton: {
		backgroundColor: theme.colors.dark.disabled,
	},
	big: {
		paddingVertical: theme.spacing[3],
	},
	small: {
		paddingVertical: theme.spacing[1],
		paddingHorizontal: theme.spacing[2],
	},
	tiny: {
		paddingVertical: theme.spacing[0],
		paddingHorizontal: theme.spacing[2],
	},
	bigtext: {
		fontSize: theme.fontSizes.medium,
	},
	smalltext: {
		fontSize: theme.fontSizes.small,
	},
	blockButton: {  
		width: "80%",
	},
	blockButtonText: {
		textAlign: "center",
	},
	iconWrapper: {
		marginRight: theme.spacing[0] * 1.5,
	},
	buttonContent: {
		width:"70%",
		paddingHorizontal:5,
		flexDirection: "row", 
		alignItems: "center", 
		justifyContent: "center", 
	},
});

export default Button;
