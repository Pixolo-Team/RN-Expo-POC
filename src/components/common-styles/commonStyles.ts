import { Platform, StyleSheet } from "react-native";

// STYLES //
import { theme } from "../../infrastructure/theme/theme";
import { CONSTANTS } from "../../infrastructure/constants";

export const commonStyles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
		backgroundColor: theme.colors.background.tint,
		paddingTop:
			Platform.OS === "android"
				? parseInt(Platform.Version as unknown as string, 10) >= 21
					? 25
					: 0
				: 0,
	},
	container: {
		backgroundColor: theme.colors.background.regular,
		flex: 1,
	},
	card: {
		backgroundColor: theme.colors.background.regular,
		borderWidth: 1,
		borderColor: theme.colors.border.tint,
		borderRadius: 4,
		shadowColor: theme.colors.shadow,
		shadowOffset: {
			width: 0,
			height: 15,
		},
		shadowOpacity: 0.06,
		shadowRadius: 6,
		elevation: 2,
		paddingTop: 24,
		paddingHorizontal: theme.spacing.large,
		paddingBottom: theme.spacing.large,
	},
	cardContentHeight: {
		height: CONSTANTS.WINDOW_HEIGHT * 0.3,
	},
	mtLarge: {
		marginTop: theme.spacing.large,
	},
	listItemBottom:{
		marginBottom: theme.spacing.regular
	}
});
