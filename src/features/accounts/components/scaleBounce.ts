import { withSpring, SharedValue } from "react-native-reanimated";

/** Start Scale animation */
export const startScaleAnimation = (scaleVal: SharedValue<number>) => {
	scaleVal.value = withSpring(
		0.98,
		{
			damping: 10,
			stiffness: 100,
		},
		() => {
			scaleVal.value = withSpring(1);
		}
	);
};