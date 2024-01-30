import React from "react";
import {
	Text,
	StyleSheet,
	Platform,
	View,
	StyleProp,
	ViewStyle,
} from "react-native";

// STYLES //
import { theme } from "../../infrastructure/theme/theme";

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //
import RNPickerSelect from "react-native-picker-select";

// SVG'S //
import Back from "../../../assets/icons/dropdown-arrow.svg";

/** Custom Dropdown Icon */
const DropdownIcon = () => {
	return <Back height={10} width={10} style={styles.dropdownArrowIcon} />;
};

interface DropdownProps {
	label: string;
	style?: StyleProp<ViewStyle>;
	dropdownItems: { label: string; value: string }[];
	selectedValue: string;
	onItemChange: (text: string, label?: string) => void;
	placeholder: Partial<{ label: string; value: string | null }>;
}

/** Dropdown Component */
const Dropdown: React.FC<DropdownProps> = ({
	label,
	style,
	dropdownItems,
	selectedValue = "",
	onItemChange,
	placeholder,
}) => {
	return (
		<View style={style}>
			{/* Label for Dropdown */}
			<Text style={styles.dropdownLabel}>{label}</Text>

			{/* Dropdown Field */}
			<View style={styles.dropdownField}>
				<RNPickerSelect
					value={selectedValue}
					onValueChange={(value, index) => {
						const itemIndex = Object.keys(placeholder).length === 0 ? index : 0;
						onItemChange(value, dropdownItems[itemIndex].label);
					}}
					items={dropdownItems}
					placeholder={placeholder}
					Icon={Platform.OS === "ios" && <DropdownIcon />}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	dropdownLabel: {
		fontSize: theme.fontSizes.tiny,
		marginBottom: theme.spacing.tiny,
	},
	dropdownField: {
		borderColor: theme.colors.dark.tint,
		color: theme.colors.dark.tint,
		paddingHorizontal: Platform.OS === "ios" ? theme.spacing.regular : 0,
		height: 40,
		borderWidth: 1,
		borderRadius: 4,
		fontSize: theme.fontSizes.small,
		paddingBottom: Platform.OS === "ios" ? 0 : 3,
		justifyContent: "center",
		position: "relative",
	},
	dropdownArrowIcon: {
		position: "absolute",
		top: 3,
		right: 3,
	},
});

export default Dropdown;
