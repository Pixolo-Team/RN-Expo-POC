import { StyleSheet } from "react-native";
import { theme } from "../../../infrastructure/theme/theme";

export const selectPhotosStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
	},
	selectPhotosContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: theme.spacing[1],
		alignContent: "center",
		paddingVertical: theme.spacing[5],
	},
	addImage: {
		marginLeft: theme.spacing[1],
		width: 100,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	
});
