import { NavigationProp } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	Extrapolate,
	interpolate,
	interpolateColor,
} from "react-native-reanimated";

interface SplashScreenType {
	navigation: NavigationProp<any>;
}
/** CustomSplashScreen starts here*/
const CustomSplashScreen: React.FC<SplashScreenType> = ({ navigation }) => {
	const logoOpacity = useSharedValue(0);
	const textOpacity = useSharedValue(0);
	const backgroundOpacity = useSharedValue(0);

	/** useEffect function to show animation on load of page */
	useEffect(() => {
		logoOpacity.value = withTiming(1, { duration: 1500 });
		textOpacity.value = withTiming(1, { duration: 1500 });
		backgroundOpacity.value = withTiming(1, { duration: 2000 });
	}, []);

	/** The Styles used for Logo Image */
	const logoStyle = useAnimatedStyle(() => {
		return {
			opacity: logoOpacity.value,
			transform: [
				{ translateY: logoOpacity.value * -50 },
				{ rotate: `${logoOpacity.value * 360}deg` }, // Add rotation based on the logoOpacity value
			],
		};
	});

	/** The Styles used for Text */
	const textStyle = useAnimatedStyle(() => {
		const bounceValue = interpolate(
			textOpacity.value,
			[0, 1],
			[0, 1.5], // Adjust the bounce intensity by changing the output range
			Extrapolate.EXTEND
		);
		const color = interpolateColor(
			textOpacity.value,
			[0, 1],
			["#246EE9", "green"] // Adjust the colors as per your preference
		);
		return {
			opacity: textOpacity.value,
			transform: [{ translateY: textOpacity.value * 50 }, { scale: bounceValue }],
			color,
		};
	});

	// Color code used for background
	const redChannel = 55; // Change the value as per your preference
	const greenChannel = 170;
	const blueChannel = 180;

	/** The Styles used for Background color */
	const backgroundStyle = useAnimatedStyle(() => {
		const backgroundColor = `rgba(${redChannel}, ${greenChannel}, ${blueChannel}, ${backgroundOpacity.value})`;
		return {
			backgroundColor,
		};
	});

	/** This useEffect function used to keep the screen for some sec and then navigate */
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("Home");
		}, 3000);
	}, []);

	return (
		<Animated.View style={[styles.container, backgroundStyle]}>
			<Animated.Image
				source={require("../../../assets/appstore.png")}
				style={[styles.logo, logoStyle]}
			/>
			<Animated.Text style={[styles.text, textStyle]}>
				Ocean Learning
			</Animated.Text>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	logo: {
		width: 60,
		height: 60,
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 16,
	},
});

export default CustomSplashScreen;
