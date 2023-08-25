import React, { useEffect, useRef, useState } from "react";
import {
	View,
	Image,
	ScrollView,
	StyleSheet,
	NativeSyntheticEvent,
	NativeScrollEvent,
	Dimensions,
} from "react-native";

// STYLES//
import { theme } from "../../../infrastructure/theme/theme";

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //
import { LinearGradient } from "expo-linear-gradient";

interface MediaSliderProps {
	selectedImageIndex: number;
	onScrollImage?: (index: number) => void;
	images?: string[]; //TODO: change during development
}

// Get window dimensions
const CONSTANTS = {
	WINDOW_HEIGHT: Dimensions.get("window").height,
	WINDOW_WIDTH: Dimensions.get("window").width,
};

// Get width of the Mobile Phone
const width = CONSTANTS.WINDOW_WIDTH;
const height = width; // To make it a Square

interface DotProps {
	active: boolean;
}

/**  Slider Dot Component*/
const Dot: React.FC<DotProps> = ({ active }) => {
	return <View style={[styles.dot, active && styles.activeDot]} />;
};

/** Media Slider Component */
const MediaSlider: React.FC<MediaSliderProps> = ({
	selectedImageIndex,
	onScrollImage,
	images,
}) => {
	// Define States
	const [isScrolling, setIsScrolling] = useState<boolean>(false); // If the user is scrolling the slider
	const [isParentScrolling, setIsParentScrolling] = useState<boolean>(false); // If the parent is causing the slider

	// Define Refs
	// To reference the Image Slider
	const scrollViewRef = useRef<ScrollView>(null);

	// Helper Functions
	/** On Scroll End */
	const handleScrollEnd = () => {
		setIsScrolling(false);
		setIsParentScrolling(false);
	};

	/** On Scroll */
	const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		if (isParentScrolling) return;
		const contentOffset = event.nativeEvent.contentOffset;
		const currentIndex = Math.round(contentOffset.x / width);
		onScrollImage && onScrollImage(currentIndex);
	};

	/** On Scroll Start */
	const handleScrollStart = () => {
		setIsScrolling(true);
	};

	// Use Effect and Focus Effect
	useEffect(() => {
		if (!isScrolling) {
			setIsParentScrolling(true);
			// Scroll to the Selected Image
			scrollViewRef.current?.scrollTo({
				x: selectedImageIndex * width,
				animated: true,
			});
		}
	}, [selectedImageIndex]);

	return (
		<View style={{ width, height }}>
			<ScrollView
				pagingEnabled
				horizontal
				style={{ width, height }}
				ref={scrollViewRef}
				onScrollBeginDrag={handleScrollStart}
				onScroll={onScroll}
				scrollEventThrottle={16}
				onMomentumScrollEnd={handleScrollEnd}
				showsHorizontalScrollIndicator={false}
				disableIntervalMomentum={true} // To disable the momentum of the scroll
				decelerationRate={"fast"} // To make the scroll faster
				snapToOffsets={images && images.map((_, index) => index * width)} // To snap to the next image
			>
				{/* Images Array */}
				{/* If my Images Array length is greater tha 0 then only show the slider */}
				{images && images.length > 0 ? (
					images.map((image, index) => (
						<Image
							key={"slider-image-" + index}
							source={{ uri: image }}
							style={{ width, height, resizeMode: "cover" }}
						/>
					))
				) : (
					<View
						style={{ width, height, backgroundColor: theme.colors.light.tint }}
					/>
				)}
			</ScrollView>

			{/* Linear Gradient */}
			<LinearGradient
				colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.48)"]}
				style={styles.gradientOverlay}
			/>

			{/* Dots */}
			{images && images.length > 0 && (
				<View style={styles.dotContainer}>
					{images.map((_, index) => (
						<Dot key={index} active={index === selectedImageIndex} />
					))}
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	dotContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: 20,
		left: 0,
		right: 0,
	},
	dot: {
		width: 7,
		height: 7,
		borderRadius: 4,
		backgroundColor: theme.colors.dark.tint,
		marginHorizontal: theme.spacing[0],
	},
	activeDot: {
		backgroundColor: theme.colors.light.regular,
	},
	gradientOverlay: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: "20%",
	},
});

export default MediaSlider;
