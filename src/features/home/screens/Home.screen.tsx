// IMPORTS //
import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	TextInput,
} from "react-native";

// STYLES //

// COMPONENTS //
import BottomDrawer from "../../../components/Modal/BottomDrawer";

// SVG //

// PLUGINS //

// CONTEXT //

/** Home screen component */
const HomeScreen: React.FC = () => {
	// Define Contexts

	// Define States
	// Initial state for media drawer visibility.
	const [showMediaDrawer, setShowMediaDrawer] = useState<boolean>(false);

	// Define Refs

	// Helper Functions
	/**  Define a function to Open the Drawer */
	const openMediaDrawer = () => {
		setShowMediaDrawer(true);
	};

	/**  Define a function to Close the Drawer */
	const closeMediaDrawer = () => {
		setShowMediaDrawer(false);
	};

	// Use Effect and Focus Effect

	// View starts
	return (
		<View style={styles.container}>
			<Text>Home Screen Works</Text>

			{/* Button to open the bottom drawer ,Added for testing purpose*/}
			<TouchableOpacity onPress={openMediaDrawer}>
				<Text>Open Bottom Drawer</Text>
			</TouchableOpacity>

			{/* Render the BottomDrawer component */}
			<BottomDrawer
				isOpen={showMediaDrawer} // Pass the state that controls the open state of the drawer
				onClose={() => {
					closeMediaDrawer();
				}} // Pass the function to close the drawer
				snapPoints={["30%"]} // Define snap points
				isScrollable={true} // Set to true if you want the content to be scrollable within the drawer
				index={0}
			>
				{/* Content to display inside the drawer */}
				<View
					style={{ padding: 18, justifyContent: "center", alignItems: "center" }}
				>
					<Text style={{ fontWeight: "bold", alignSelf: "flex-start" }}>
						Dummy Bottom Drawer
					</Text>
					<Text style={{ alignSelf: "flex-start", marginVertical: 18 }}>Title</Text>
					<TextInput
						placeholder="Type here"
						style={{
							borderBottomColor: "gray",
							borderBottomWidth: 0.2,
							width: "100%",
							padding: 12,
						}}
					/>
					<TouchableOpacity
						style={{
							height: 60,
							width: "100%",
							backgroundColor: "black",
							borderRadius: 30,
							justifyContent: "center",
							alignItems: "center",
							marginVertical: 30,
						}}
					>
						<Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
					</TouchableOpacity>
				</View>
			</BottomDrawer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default HomeScreen;
