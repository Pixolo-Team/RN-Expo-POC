// IMPORTS //
import React, { useState } from "react";
import { View } from "react-native";

// STYLES //

// COMPONENTS //
import CheckBox from "../../components/CheckBox";

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// States
	const [isChecked, setIsChecked] = useState(false);

	// Helper functions
	/** On click Checkbox */
	const handleCheckboxChange = (value: boolean) => {
		setIsChecked(value);
	};

	// View starts
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{/* Custom Checkbox */}
			<CheckBox
				label="Checkbox 1"
				isChecked={isChecked}
				onChange={handleCheckboxChange}
				disabled={false}
			/>
		</View>
	);
};

export default HomeScreen;
