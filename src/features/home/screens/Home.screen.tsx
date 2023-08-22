// IMPORTS //
import React, { useState } from "react";
import { View } from "react-native";

// STYLES //

// COMPONENTS //
import Button from "../../../components/common-components/Button";
import DateInput from "../../../components/common-components/DateInput";

// SVG //
import Close from "../../../../assets/icons/close.svg";

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// States
	const [selectedDate, setSelectedDate] = useState(""); // State to hold the selected date

	// Helper functions
	/** On click Button */
	const handleButtonPress = () => {
		// Handle button press logic here
		console.log("Button Pressed");
	};

	/** Function to handle the selected date */
	const handleDateChange = (date: React.SetStateAction<string>) => {
		setSelectedDate(date);
	};

	// View starts
	return (
		<View style={{ marginTop: 100 }}>
			<Button
				icon={<Close width={18} height={18} />}
				text="Custom Button"
				backgroundColor="secondary"
				borderColor="secondary"
				onClick={handleButtonPress}
				size="big"
				mode="block"
			></Button>

			{/** added view for testing purpose */}
			<View
				style={{
					height: 100,
					width: "100%",
					paddingHorizontal: 20,
					justifyContent: "center",
				}}
			>
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

export default HomeScreen;
