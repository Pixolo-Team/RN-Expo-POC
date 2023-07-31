import { StyleSheet } from "react-native";

// STYLES //
import { theme } from "../../../infrastructure/theme/theme";

// UTILS //
import { CONSTANTS } from "../../../infrastructure/constants/constants";

export const loginStyles = StyleSheet.create({
	SafeAreaViewStyle:{
		flex:1,
		backgroundColor: theme.colors.background.tint
	},
	loginMain: {
		position: "relative",
		backgroundColor: theme.colors.background.regular,
		flex: 1,
	},
	loginBackground: {
		height: CONSTANTS.WINDOW_HEIGHT * 0.7,
		backgroundColor: theme.colors.background.tint,
		position: "absolute",
		width: "100%",
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	},
	companyLogoContainer: {
		marginTop: CONSTANTS.WINDOW_HEIGHT * 0.2,
		alignItems: "center",
		justifyContent: "center",
	},
	companyLogoImage: {
		maxWidth: 100,
	},
	companyLogoText: {
		fontFamily: "primary-bold",
		fontSize: theme.fontSizes.regular,
		color: theme.colors.text.regular,
		marginTop: theme.spacing.tiny,
	},
	loginCard: {
		justifyContent: "space-between",
		marginTop: CONSTANTS.WINDOW_HEIGHT * 0.05,
	},
	cardHeight: {
		height: CONSTANTS.WINDOW_HEIGHT * 0.52,
		marginHorizontal: 24,
	},
	loginTitle: {
		fontFamily: "primary-medium",
		fontSize: theme.fontSizes.regular,
		marginBottom: theme.spacing.xlarge,
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
	companyName: {
		marginTop: theme.spacing.xxlarge,
	},
	listsWrap: {
		height: CONSTANTS.WINDOW_HEIGHT * 0.2,
	},
	btmFeatures: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: theme.spacing.small,
	},
	forgotPasswordText: {
		fontFamily: "primary-regular",
		fontSize: theme.fontSizes.tiny,
		color: theme.colors.primary.regular,
		textDecorationLine: "underline",
	},
});
