// Can be used for Input Items, mainly in Account Screens
import React, { useState } from "react";
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
	Platform,
} from "react-native";

// STYLES //
import { theme } from "../../infrastructure/theme/theme";

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //

// SVG'S //
import CloseIcon from "../../../assets/icons/close.svg";
import InfoIcon from "../../../assets/icons/info.svg";

interface TextInputBoxProps {
	label: string;
	placeholder: string;
	errorMessage?: string;
	style?: StyleProp<ViewStyle>;
	isError?: boolean;
	value: string;
	onClear?: () => void;
	onChangeText: (text: string) => void;
	type?: "text" | "password" | "email";
	multiline?: boolean;
	numberOfLines?: number;
}

/** Text Input Box */
const TextInputBox: React.FC<TextInputBoxProps> = ({
	label = "",
	placeholder,
	errorMessage,
	style,
	isError = false,
	value = "",
	onClear,
	onChangeText,
	multiline = false,
	numberOfLines = 1,
	type = "text",
}) => {
	// Define Contexts

	// Define States
	const [isFocused, setIsFocused] = useState<boolean>(false);

	// Define Refs

	// Helper Functions

	return (
		<View style={style}>
			{/* Label for Input */}
			{label !== "" && <Text style={styles.loginLabel}>{label}</Text>}

			<View style={styles.inputFieldItem}>
				{/* Add (isFocused) class to add boxshadow on focus and for adding red border on error add class (inputError) */}
				<TextInput
					style={[
						styles.loginInput,
						isFocused ? styles.isFocused : null,
						isError ? styles.inputError : null,
						multiline
							? Platform.OS === "ios"
								? { height: 100 }
								: null
							: { height: 40 },
						multiline ? styles.multiline : null,
					]}
					multiline={multiline}
					numberOfLines={numberOfLines}
					placeholder={placeholder}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					value={value}
					onChangeText={(text) => onChangeText(text)}
					secureTextEntry={type === "password" ? true : false}
					autoCapitalize="none"
				/>

				<View style={styles.inputIconsWrap}>
					{/* Info Button */}
					{isError && (
						<TouchableOpacity activeOpacity={0.5} style={styles.inputActionButtons}>
							<InfoIcon />
						</TouchableOpacity>
					)}

					{/* Clear Button */}
					{value.length > 0 && (
						<TouchableOpacity
							activeOpacity={0.4}
							style={[
								styles.inputActionButtons,
								multiline ? styles.inputActionButtosMultiline : null,
							]}
							onPress={onClear}
						>
							<CloseIcon />
						</TouchableOpacity>
					)}
				</View>
			</View>

			{/* Error message */}
			{errorMessage && isError && (
				<Text style={styles.loginErrorMessage}>{errorMessage}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	loginLabel: {
		fontFamily: "primary-regular",
		fontSize: theme.fontSizes.tiny,
		marginBottom: theme.spacing.tiny,
	},
	inputFieldItem: {
		position: "relative",
	},
	passwordContainer: {
		marginTop: theme.spacing.large,
	},
	loginInput: {
		borderColor: theme.colors.border.tint,
		color: theme.colors.text.tint,
		paddingHorizontal: theme.spacing.regular,
		borderWidth: 1,
		borderRadius: 4,
		fontFamily: "primary-regular",
		fontSize: theme.fontSizes.small,
		paddingBottom: Platform.OS === "ios" ? 0 : 3,
		justifyContent: "flex-start",
		paddingRight: 30,
	},
	multiline: {
		textAlignVertical: "top",
		paddingTop: theme.spacing.small,
	},
	isFocused: {
		borderColor: theme.colors.primary.regular,
	},
	inputError: {
		borderColor: theme.colors.red.regular,
	},
	inputIconsWrap: {
		position: "absolute",
		right: 5,
		top: 0,
		flexDirection: "row",
		alignItems: "center",
		height: "100%",
	},
	inputActionButtons: {
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		width: 25,
	},
	inputActionButtosMultiline: {
		justifyContent: "flex-start",
		paddingTop: theme.spacing.large,
	},
	loginErrorMessage: {
		fontFamily: "primary-regular",
		fontSize: theme.fontSizes.tiny,
		color: theme.colors.red.regular,
		marginTop: theme.spacing.tiny,
	},
	loginFormError: {
		marginTop: theme.spacing.xxlarge,
	},
});

export default TextInputBox;
