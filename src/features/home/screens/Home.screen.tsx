// IMPORTS //
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

// STYLES //

// COMPONENTS //
import DateInput from "../../../components/common-components/DateInput";

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States
	const [selectedDate, setSelectedDate] = useState(""); // State to hold the selected date

	// Define Refs

	// Helper Functions
	/** Function to handle the selected date */
	const handleDateChange = (date: React.SetStateAction<string>) => {
		setSelectedDate(date);
	};

	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			<Text>Home Screen Works</Text>

			{/** View to test the Common DateInput  */}
			<View style={{ height: 100, justifyContent: "center", padding: 10 }}>
				{/** Common DateInput */}
				<DateInput
					label="Select a Date"
					placeholder="MM/DD/YYYY"
					value={selectedDate}
					onChangeDate={handleDateChange} // Pass the handleDateChange function
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
