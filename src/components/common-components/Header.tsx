// IMPORTS //
import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";

// STYLES //

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //
import { useNavigation } from "@react-navigation/native";

// SVG'S //
import Back from "../../../assets/icons/back-arrow.svg";

// Interface
interface HeaderProps {
	title: string;
	showBackButton?: boolean;
	backFunction?: () => void;
}

/** Header Component */
const Header: React.FC<HeaderProps> = ({
	title,
	showBackButton = true,
	backFunction,
}) => {
	// States

	// Obtain the navigation object using the useNavigation hook
	const navigation = useNavigation();

	//  Helper functions
	/** Helper function to handle the back button press */
	const handleBackPress = () => {
		if (backFunction) {
			// If a custom back function is provided, call it
			backFunction();
		} else {
			// Otherwise, navigate back using the navigation object
			navigation.goBack();
		}
	};

	// Render the header component
	return (
		<SafeAreaView>
			<View style={styles.container}>
				{/* Render the Back Button if showBackButton is true and backFunction is defined */}
				{showBackButton && backFunction && (
					<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
						<Back height={20} width={20} />
					</TouchableOpacity>
				)}

				{/* Render the title */}
				<View style={styles.textAreaView}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</View>

			{/* Render a separator line */}
			<View
				style={{
					height: 0.5,
					backgroundColor: "gray",
					width: "95%",
					alignSelf: "center",
				}}
			></View>
		</SafeAreaView>
	);
};

// Define the component's styles
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 15,
		width: "100%",
		marginVertical: 20,
	},
	backButton: {
		width: "8%",
		justifyContent: "center",
	},
	textAreaView: {
		width: "92%",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		alignSelf: "center",
		fontWeight: "600",
	},
});

export default Header;
