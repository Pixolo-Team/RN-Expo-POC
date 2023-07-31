import { StyleSheet } from "react-native";
import { theme } from "../../infrastructure/theme/theme";

// STYLES //
export const infoBox = StyleSheet.create({
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	listItemDetails: {
		flexDirection: "row",
	},
	listItemIconWrap: {
		height: 24,
		width: 24,
		borderRadius: 4,
		backgroundColor: theme.colors.background.tint,
		alignItems: "center",
		justifyContent: "center",
		marginRight: theme.spacing.small,
	},
	listItemTextWrap: {},
	listItemTitle: {
		fontFamily: "primary-regular",
		fontSize: theme.fontSizes.small,
		marginBottom: theme.spacing.tiny,
		color: theme.colors.text.regular,
	},
	listItemDescrption: {
		fontFamily: "primary-bold",
		fontSize: theme.fontSizes.small,
		lineHeight: theme.fontSizes.regular,
	},
	forwardArrowWrap: {
		alignSelf: "flex-end",
	},
});
