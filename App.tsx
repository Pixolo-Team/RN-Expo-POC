// IMPORTS //
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// SVG //
import Calender from "./assets/icons/calender.svg";
import Check from "./assets/icons/check.svg";

/** App */
export default function App() {
  // View starts here 
	return (
		<View style={styles.container}>
			<Text>SVG Icons Examples</Text>
			<Calender style={{margin:10}} height={20} width={20} />
      <Check  style={{margin:10}} height={30} width={30}/>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
