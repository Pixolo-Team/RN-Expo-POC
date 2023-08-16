import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

// STYLES//
import { theme } from "../../../infrastructure/theme/theme";

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //
import LottieView from "lottie-react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
} from "react-native-reanimated";
import { startScaleAnimation } from "../components/scaleBounce";

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

	// Helper Functions
	const buttonSize = styles[size];
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
						backgroundColor: theme.colors.background.tint,
						borderColor:
							disabled || showButtonLoader
								? theme.colors.primary.contrast
								: theme.colors.border.regular,
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
						<LottieView
							// source={require("../../../../assets/animations/loading-animation.json")}
							autoPlay
							loop
						/>
						<Text
							style={[
								styles.commonButtonText,
								{
									// color: theme.colors[backgroundColor].contrast,
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
					<>
						{icon && <View style={styles.iconWrapper}>{icon}</View>}
						<Text
							style={[
								styles.commonButtonText,
								{
									// color: theme.colors[backgroundColor].contrast,
								},
								buttonFontSize,
								mode === "block" && styles.blockButtonText,
							]}
						>
							{text}
						</Text>
					</>
				)}
			</TouchableOpacity>
		</Animated.View>
	);
};

const styles: any = StyleSheet.create({
	buttonWrap: {
		alignItems: "flex-start",
	},
	commonButton: {
		backgroundColor: theme.colors.primary.regular,
		borderRadius: 32,
		borderWidth: 1.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	commonButtonText: {
		// fontFamily: theme.font.primary.medium,
		textAlign: "center",
	},
	disabledButton: {
		// backgroundColor: theme.colors.dark.disabled,
	},
	big: {
		paddingVertical: theme.spacing.medium,
	},
	small: {
		paddingVertical: theme.spacing.medium,
		paddingHorizontal: theme.spacing.small,
	},
	tiny: {
		paddingVertical: theme.spacing.tiny,
		paddingHorizontal: theme.spacing.small,
	},
	bigtext: {
		fontSize: theme.fontSizes.medium,
	},
	smalltext: {
		fontSize: theme.fontSizes.small,
	},
	blockButton: {
		width: "100%",
	},
	blockButtonText: {
		textAlign: "center",
	},
	iconWrapper: {
		marginRight: theme.spacing.tiny * 1.5,
	},
});

export default Button;
