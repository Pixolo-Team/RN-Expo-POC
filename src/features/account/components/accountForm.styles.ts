import { StyleSheet } from "react-native";
import { theme } from "../../../infrastructure/theme/theme";

export const accountFormStyles = StyleSheet.create({
	loginContainer: {
		padding: theme.spacing[5],
		paddingTop: theme.spacing[7],
	},

	inputBox: {
		marginBottom: theme.spacing[2],
	},
});
