import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

// STYLES //
import { theme } from "../../infrastructure/theme/theme";

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //

// SVG'S //
import CheckIcon from "../../../assets/icons/check.svg";

interface CheckboxProps {
	label: string;
	checked: boolean;
	onPress: () => void;
}
/** Check box  */
const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onPress }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			style={styles.checkboxContainer}
			onPress={onPress}
		>
			{/* for making checkbox checked add class (isChecked) */}
			<View style={[styles.checkbox, checked ? styles.isChecked : null]}>
				{checked && (
					<CheckIcon
						style={styles.checkedIcon}
						color={theme.colors.primary.tint}
					/>
				)}
			</View>
			<Text style={styles.checkboxLabel}>{label}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	checkboxContainer: {
		flexDirection: "row",
		alignItems: "center",
		rowGap: theme.spacing[1],
	},
	checkbox: {
		width: 16,
		height: 16,
		borderColor: theme.colors.primary.tint,
		borderRadius: 3,
		borderWidth: 1,
		marginRight: theme.spacing[0],
		alignItems: "center",
		justifyContent: "center",
	},
	isChecked: {
		backgroundColor: theme.colors.primary.regular,
		borderColor: theme.colors.primary.regular,
	},
	checkboxLabel: {
		fontSize: theme.fontSizes.tiny,
		color: theme.colors.primary.tint,
	},
	checkedIcon: {
		width: 12,
		height: 12,
	},
});

export default Checkbox;
