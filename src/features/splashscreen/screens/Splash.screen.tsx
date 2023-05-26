// IMPORTS //
import React, { useEffect } from "react";

// STYLES //
import { splashScreenStyles } from "../components/splashScreen.styles";

// COMPONENTS //

// UTILS //

// PLUGINS //
import { NavigationProp } from "@react-navigation/native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	Extrapolate,
	interpolate,
	interpolateColor,
} from "react-native-reanimated";

// Define the props for the component SplashScreen
interface SplashScreenType {
	navigation: NavigationProp<any>;
}
/** CustomSplashScreen starts here*/
const CustomSplashScreen: React.FC<SplashScreenType> = ({ navigation }) => {
	// Define Contexts

	// Init States
	const logoOpacity = useSharedValue(0);
	const textOpacity = useSharedValue(0);
	const backgroundOpacity = useSharedValue(0);

	// Define Refs

	// Helper Functions
	/** The useAnimatedStyle function accepts a callback function that returns an object specifying the style properties for the logo element. Within this callback, the opacity and transform properties are defined. */
	const logoStyle = useAnimatedStyle(() => {
		return {
			opacity: logoOpacity.value,
			transform: [
				{ translateY: logoOpacity.value * -50 }, // Adjust the vertical position based on logoOpacity
				{ rotate: `${logoOpacity.value * 360}deg` }, // Add rotation based on the logoOpacity value
			],
		};
	});

	/** The textStyle function is used to define an animated style for a text element */
	const textStyle = useAnimatedStyle(() => {
		// Define the bounce effect intensity based on the textOpacity value
		const bounceValue = interpolate(
			textOpacity.value,
			[0, 1],
			[0, 1.5], // Adjust the bounce intensity by changing the output range
			Extrapolate.EXTEND
		);

		// Define the color based on the textOpacity value
		const color = interpolateColor(
			textOpacity.value,
			[0, 1],
			["#246EE9", "green"] // Adjust the colors as per your preference
		);

		// Return the animated style object with opacity, translation, and color
		return {
			opacity: textOpacity.value,
			transform: [{ translateY: textOpacity.value * 50 }, { scale: bounceValue }],
			color,
		};
	});

	/** This useAnimatedStyle function creates a background style for a component using an animated value and returns an object with the background color style. */
	const backgroundStyle = useAnimatedStyle(() => {
		const redChannel = 55; // Specifies the red color channel value for the background.
		const greenChannel = 170; // Specifies the green color channel value for the background.
		const blueChannel = 180; // Specifies the blue color channel value for the background.
		const backgroundColor = `rgba(${redChannel}, ${greenChannel}, ${blueChannel}, ${backgroundOpacity.value})`; // Combines the red, green, and blue channel values with the background opacity to create the background color.
		return {
			backgroundColor,
		};
	});

	/** useEffect function to show animation on load of page and to keep the screen for some sec and then navigate*/
	useEffect(() => {
		logoOpacity.value = withTiming(1, { duration: 1500 });
		textOpacity.value = withTiming(1, { duration: 1500 });
		backgroundOpacity.value = withTiming(1, { duration: 2000 });
		setTimeout(() => {
			navigation.navigate("Home");
		}, 3000);
	}, []);

	// View starts
	return (
		<Animated.View style={[splashScreenStyles.container, backgroundStyle]}>
			<Animated.Image
				source={require("../../../../assets/appstore.png")}
				style={[splashScreenStyles.logo, logoStyle]}
			/>
			<Animated.Text style={[splashScreenStyles.text, textStyle]}>
				Ocean Learning
			</Animated.Text>
		</Animated.View>
	);
};

export default CustomSplashScreen;
