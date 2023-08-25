// IMPORTS //
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// STYLES //

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //

// SVG'S //
import Back from "../../../assets/icons/back-arrow.svg";
import { useNavigation } from "@react-navigation/native";

// interface
interface HeaderProps {
	title: string;
	showBackButton?: boolean;
	backFunction?: () => void;
    gap:number;
}

/** Header */
const Header: React.FC<HeaderProps> = ({ title, backFunction, gap = 0 }) => {
	// states
	const navigation = useNavigation();
	/** Back button */
	const handleBackPress = () => {
		if (backFunction) {
			backFunction();
		} else {
			navigation.goBack();
		}
	};

	return (
		<View
			style={{
				paddingTop: gap,
				backgroundColor: "lightgray",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				paddingHorizontal: 16,
				height: 64,
			}}
		>
			{backFunction && (
				<TouchableOpacity onPress={handleBackPress}>
					<Back height={20} width={20}/>
				</TouchableOpacity>
			)}
			<Text style={{ fontSize: 20 }}>{title}</Text>
			<View style={{ width: 24 }}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#007ACC",
		padding: 15,
		alignItems: "center",
		flexDirection: "row", // Make the title and back button align horizontally
	},
	backButton: {
		position: "absolute",
		left: 10,
	},
	title: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		alignSelf: "center",
		margin: 10,
	},
});

export default Header;
