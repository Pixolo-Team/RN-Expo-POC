// IMPORTS //
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
import Arrow from "../../../assets/icons/dropdown-arrow.svg";

// interface DropDownProps
interface DropDownProps {
	label: string;
	style?: StyleProp<ViewStyle>;
	dropdownItems: { label: string; value: string }[];
	selectedValue: string;
	onItemChange: (text: string) => void;
	placeholder: Partial<{ label: string; value: string | null }>;
}

/** Dropdown Component */
const DropDown: React.FC<DropDownProps> = ({
	label,
	style,
	dropdownItems,
	selectedValue = "",
	onItemChange,
	placeholder,
}) => {
	/** Custom Dropdown Icon */
	const DropdownIcon = () => {
		return <Arrow height={10} width={10} style={styles.dropdownArrowIcon} />;
	};

	// View starts here
	return (
		<View style={style}>
			{/* Label for Dropdown */}
			<Text style={styles.dropDownLabel}>{label}</Text>

			{/* Dropdown Field */}
			<View style={styles.dropDownField}>
				<RNPickerSelect
					value={selectedValue}
					onValueChange={(value) => onItemChange(value)}
					items={dropdownItems}
					placeholder={{ label: placeholder, value: null }}
					Icon={Platform.OS === "ios" ? DropdownIcon : null}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	dropDownLabel: {
		fontSize: theme.fontSizes.tiny,
		marginBottom: theme.spacing[0],
	},
	dropDownField: {
		borderColor: theme.colors.primary.tint,
		color: theme.colors.primary.tint,
		paddingHorizontal: Platform.OS === "ios" ? theme.spacing[2] : 0,
		height: 40,
		borderWidth: 1,
		borderRadius: 4,
		fontSize: theme.fontSizes.small,
		paddingBottom: Platform.OS === "ios" ? 0 : 3,
		justifyContent: "center",
	},
	dropdownArrowIcon: {
		position: "absolute",
		top: 3,
		right: 3,
	},
});

export default DropDown;
