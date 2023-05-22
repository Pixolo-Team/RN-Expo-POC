import React from "react";
import {
	View,
	Text,
	StyleSheet,
} from "react-native";
interface Home {
	navigation: any;
}
/** Home screen component */
const Home: React.FC<Home> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={{ color: "black", marginLeft: 10 ,fontSize:20}}>
				Welcome to the Home page
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3EB489",
		justifyContent: "center",
		alignItems: "center",
	},
});
export default Home;
