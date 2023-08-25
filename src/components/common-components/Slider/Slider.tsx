import React, { useEffect, useRef, useState } from "react";
import {
	LayoutAnimation,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";

// STYLES//
import { selectPhotosStyles } from "./selectFiles.styles";

// COMPONENTS //
import MediaSlider from "./MediaSlider";
import MediaList from "./MediaList";

// SERVICES //

// UTILS //

// PLUGINS //

// SVGs //
import AddBoxIcon from "../../../../assets/icons/add-box.svg";

// interface SelectFilesProps {}
interface SelectFilesProps {
	onAddFileClick: () => void;
}

/** Slider Component */
const SelectPhotosScreen: React.FC<SelectFilesProps> = ({ onAddFileClick }) => {
	// Define States
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

	// Define Refs
	const scrollViewRef = useRef<ScrollView>(null);

	// Helper Functions
	/** Handle Slide */
	const handleImageChange = (index: number) => {
		// If the index is same as the selected index then return
		if (selectedImageIndex === index) return;
		// Set the selected index and scroll to the selected image
		setSelectedImageIndex(index);
		scrollToSelectedImage(index);
	};

	/** Scroll to the Selected Image */
	const scrollToSelectedImage = (selectedImageIndex: number) => {
		scrollViewRef.current?.scrollTo({
			x: selectedImageIndex * 100,
			animated: true,
		});
	};

	//TODO: Remove this data later
	const images = [
		"https://images.unsplash.com/photo-1689015040813-e16a11fc3085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
		"https://images.unsplash.com/photo-1688939302754-03a1b99870b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
		"https://images.unsplash.com/photo-1689015040813-e16a11fc3085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
		"https://images.unsplash.com/photo-1688939302754-03a1b99870b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
	];

	// Use Effect and Focus Effect
	useEffect(() => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	}, [selectedImageIndex]);

	return (
		<View style={selectPhotosStyles.container}>
			<ScrollView>

				{/* Content */}
				<View style={selectPhotosStyles.contentContainer}>
					<View>
						{/** Media Slider */}
						<MediaSlider
							selectedImageIndex={selectedImageIndex}
							onScrollImage={handleImageChange}
							images={images}
						/>

						{/** Select Photos Container */}
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							ref={scrollViewRef}
						>
							{/** Image List*/}
							<View style={selectPhotosStyles.selectPhotosContainer}>
								{images.map((item, index) => (
									<MediaList
										selectedImageIndex={selectedImageIndex}
										onSelectImage={handleImageChange}
										key={`media-list-item-${index}`}
										index={index}
										imagePath={item}
									/>
								))}

								{/** Add Media Button */}
								<TouchableOpacity
									activeOpacity={0.4}
									style={selectPhotosStyles.addImage}
									onPress={() => onAddFileClick()}
								>
									{/* Add Box Icon for adding new images */}
									<AddBoxIcon style={{ alignSelf: "center" }} />
								</TouchableOpacity>
							</View>
						</ScrollView>
					</View>
				</View>
			
			</ScrollView>
		</View>
	);
};

export default SelectPhotosScreen;
