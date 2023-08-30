import React, { useEffect, useRef } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	LayoutAnimation,
	Animated,
} from "react-native";

// STYLES//
import { theme } from "../../../infrastructure/theme/theme";

// COMPONENTS //

// SERVICES //

// UTILS //

// PLUGINS //

// SVG's //
import DeleteIcon from "../../../../assets/icons/delete.svg";

// ANIMATIONS//

interface MediaListProps {
	selectedImageIndex: number;
	onSelectImage?: (index: number) => void;
	index: number;
	imagePath?: string;
}

/** Media Component */
const MediaList: React.FC<MediaListProps> = ({
	selectedImageIndex,
	onSelectImage,
	index,
	imagePath,
}) => {
	// Define States

	// Define Refs
	const animateController = useRef(new Animated.Value(0)).current;

	// Helper Functions
	/** Delete the Current Image */
	const deleteImage = () => {
		// TODO: add logic to delete single image
	};

	/** Animation Config */
	LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	const imageWrapScale = animateController.interpolate({
		inputRange: [0, 1],
		outputRange: [1, 0.84],
	});

	// Use Effect and Focus Effect
	useEffect(() => {
		Animated.timing(animateController, {
			toValue: selectedImageIndex === index ? 1 : 0,
			duration: 150,
			useNativeDriver: true,
		}).start();
	}, [selectedImageIndex]);

	return (
		<TouchableOpacity
			style={[
				styles.imageContainer,
				index === selectedImageIndex && styles.containerActive,
			]}
			activeOpacity={0.8}
			onPress={() => {
				onSelectImage && onSelectImage(index);
			}}
		>
			{/** Image Wrapper */}
			<Animated.View
				style={[
					index === selectedImageIndex && styles.imageWrap,
					{ transform: [{ scale: imageWrapScale }] },
				]}
			>
				{/** Image */}
				<Image
					style={{
						width: "100%",
						height: "100%",
					}}
					source={{
						uri: imagePath,
					}}
				/>

				{/* Delete Icon */}
				{index === selectedImageIndex && (
					<View style={styles.activeImage}>
						<DeleteIcon
							style={{ width: 100, height: 100, alignSelf: "center" }}
							onPress={deleteImage}
						/>
					</View>
				)}
			</Animated.View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		marginLeft: theme.spacing[1],
		width: 100,
		height: 100,
		overflow: "hidden",
	},
	containerActive: {
		borderWidth: 2.5,
		borderColor: theme.colors.dark.regular,
	},
	imageWrap: {
		transform: [{ scale: 0.8 }],
	},
	activeImage: {
		top: 10,
		right: 10,
		position: "absolute",
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},
});

export default MediaList;
