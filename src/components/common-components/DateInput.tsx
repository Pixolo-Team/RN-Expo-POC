import React, { useState } from "react";
import {
	Text,
	StyleSheet,
	Platform,
	View,
	Modal,
	TextInput,
	StyleProp,
	ViewStyle,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";

// STYLES //
import { theme } from "../../infrastructure/theme/theme";

// COMPONENTS //

// SERVICES //

// UTILS //
import { formatDate } from "../../utils/parse";

// PLUGINS //
import DateTimePicker from "@react-native-community/datetimepicker";

// SVG'S //
import DateCalender from "../../../assets/icons/date.svg";

interface DateInputProps {
	label: string;
	placeholder: string;
	style?: StyleProp<ViewStyle>;
	value: string;
	minimumDate?: Date;
	onChangeDate: (date: string) => void;
}

/** Date Input Component */
const DateInput: React.FC<DateInputProps> = ({
	label,
	placeholder,
	style,
	value = "",
	minimumDate = new Date(),
	onChangeDate,
}) => {
	// Define States
	const [date, setDate] = useState<Date>(new Date());
	const [showPicker, setShowPicker] = useState<boolean>(false);
	const [modalVisible, setModalVisible] = useState(false);

	//  Helper functions
	/** Toggle the date picker visibility */
	const toggleDatePicker = (): void => {
		setShowPicker((prevState) => !prevState);
	};

	/** Handle the date change event */
	const onChange = (event: any, selectedDate: any): void => {
		const type = event.type;

		// When the date is set in the Input Date Box
		if (type === "set") {
			// Close the date picker on Android
			if (Platform.OS === "android") {
				toggleDatePicker();
			}
			// If selectedDate is undefined, use the current date
			const currentDate = selectedDate || date;

			// Format the date for display
			const formattedDate = formatDate(currentDate);
			setDate(currentDate);
			onChangeDate(formattedDate);
		} else {
			// Close the date picker on cancel or dismiss
			setShowPicker(false);
		}
	};

	// View starts here
	return (
		<View style={style}>
			{/* We use 2 different date picker for Android and IOS because of some UI issues */}
			{/* Date Picker Modal for IOS */}
			{showPicker && Platform.OS === "ios" && (
				<Modal
					visible={showPicker}
					transparent
					onDismiss={() => setShowPicker(false)}
				>
					<TouchableOpacity
						activeOpacity={1}
						onPress={() => setShowPicker(false)}
						style={styles.iosDateModalWrap}
					>
						<TouchableWithoutFeedback onPress={(e) => e.preventDefault()}>
							<View style={styles.iosDateModal}>
								<DateTimePicker
									mode="date"
									display="spinner"
									value={date}
									minimumDate={minimumDate}
									onChange={onChange}
									style={{ marginBottom: 10 }}
								/>

								{/* Button for Save the selected date in input and dismiss the modal in IOS */}
								<TouchableOpacity
									style={{ alignSelf: "center" }}
									onPress={() => {
										toggleDatePicker();
										setModalVisible(!modalVisible);
									}}
								>
									<Text>Confirm</Text>
								</TouchableOpacity>
							</View>
						</TouchableWithoutFeedback>
					</TouchableOpacity>
				</Modal>
			)}

			{/* Date Picker for Android */}
			{showPicker && Platform.OS === "android" && (
				<DateTimePicker
					mode="date"
					display="default"
					minimumDate={new Date()}
					value={date}
					onChange={onChange}
				/>
			)}

			{/* Label for Date Input */}
			<Text style={styles.dateLabel}>{label}</Text>

			{/* Display Date Input Box */}
			<View style={[styles.dateInputWrap]}>
				<TouchableOpacity
					onPress={toggleDatePicker}
					activeOpacity={1}
					style={[styles.dateInputWrapClick]}
				/>
				<TextInput
					style={styles.dateInputField}
					placeholder={placeholder}
					value={value}
					editable={false}
				/>

				{/* Calender svg icon */}
				<View style={styles.calenderIconWrap}>
					<DateCalender />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	dateLabel: {
		fontSize: theme.fontSizes.tiny,
		marginBottom: theme.spacing[0],
	},
	dateInputField: {
		borderColor: theme.colors.primary.tint,
		color: theme.colors.primary.tint,
		paddingHorizontal: theme.spacing[2],
		borderWidth: 1,
		borderRadius: 4,
		fontSize: theme.fontSizes.small,
		paddingBottom: Platform.OS === "ios" ? 0 : 3,
		justifyContent: "flex-start",
		paddingRight: 30,
		height: 40,
	},
	dateInputWrap: {
		position: "relative",
	},
	calenderIconWrap: {
		position: "absolute",
		right: 0,
		height: 40,
		borderLeftColor: "#B3B3BA",
		borderLeftWidth: 1,
		width: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	iosDateModalWrap: {
		backgroundColor: "rgba(0,0,0,0.6)",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	iosDateModal: {
		backgroundColor: "white",
		height: 300,
		width: "100%",
		borderRadius: 10,
		padding: theme.spacing[3],
	},
	dateInputWrapClick: {
		position: "absolute",
		top: 0,
		left: 0,
		height: 40,
		width: "100%",
		zIndex: 1,
	},
});

export default DateInput;
