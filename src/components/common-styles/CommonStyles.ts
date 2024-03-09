import { StyleSheet } from "react-native";
import { theme } from "../../infrastructure/theme/theme";

export const commonStyles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
		backgroundColor: theme.colors.light.regular,
	},
	container: {
		flex: 1,
	},
});
