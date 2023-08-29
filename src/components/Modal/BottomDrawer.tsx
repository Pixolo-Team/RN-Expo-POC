import React, { useRef, useEffect, useCallback } from "react";

// STYLES//

// COMPONENTS //
import {
	BottomSheetModal,
	BottomSheetModalProvider,
	BottomSheetScrollView,
	BottomSheetView,
	BottomSheetBackdrop,
	BottomSheetFooter,
} from "@gorhom/bottom-sheet";

// SERVICES //

// UTILS //

// PLUGINS //
import { SharedValue } from "react-native-reanimated";

interface BottomDrawerProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose?: () => void;
	snapPoints: (string | number)[] | SharedValue<(string | number)[]>;
	isScrollable?: boolean;
	index?: number;
	footerComponent?: React.ReactNode;
	shouldRenderBackdrop?: boolean;
	enablePanDownToClose?: boolean;
	onModalChange?: (index: number) => void; // This index is the index of the snap point
}

/** Bottom Drawer Component */
const BottomDrawer: React.FC<BottomDrawerProps> = ({
	children,
	isOpen,
	onClose,
	snapPoints,
	isScrollable,
	index,
	footerComponent,
	shouldRenderBackdrop = true,
	enablePanDownToClose,
	onModalChange,
}) => {
	// Define States

	// Define Refs
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	// Helper Functions

	/** Open the Drawer */
	const presentDrawer = () => {
		bottomSheetModalRef.current?.present();
	};

	/** Dismiss the Drawer */
	const dismissDrawer = () => {
		bottomSheetModalRef.current?.dismiss();
	};

	// Use Effect and Focus Effect
	useEffect(() => {
		isOpen ? presentDrawer() : dismissDrawer();
	}, [isOpen]);

	// Backdrop Component
	const renderBackdrop = useCallback(
		(props: any) => (
			<BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
		),
		[]
	);

	const renderFooter = useCallback(
		(props: any) => (
			<BottomSheetFooter {...props}>{footerComponent}</BottomSheetFooter>
		),
		[]
	);

	return (
		<>
			{/**Bottom Sheet Modal Component */}
			<BottomSheetModalProvider>
				<BottomSheetModal
					ref={bottomSheetModalRef}
					onChange={onModalChange}
					snapPoints={snapPoints}
					index={index}
					onDismiss={onClose}
					backdropComponent={shouldRenderBackdrop ? renderBackdrop : undefined}
					footerComponent={renderFooter}
					enablePanDownToClose={enablePanDownToClose}
				>
					{isScrollable ? (
						<BottomSheetScrollView contentContainerStyle={{ flex: 1 }}>
							{children}
						</BottomSheetScrollView>
					) : (
						<BottomSheetView style={{ flex: 1 }}>{children}</BottomSheetView>
					)}
				</BottomSheetModal>
			</BottomSheetModalProvider>
		</>
	);
};

export default BottomDrawer;
