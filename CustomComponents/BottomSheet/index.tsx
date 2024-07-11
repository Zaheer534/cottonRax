import {StyleSheet} from 'react-native';
import React, {Dispatch, ReactNode, SetStateAction} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import SBS from './BottomSheet.styles';

interface BottomSheetProp {
  bottomSheetRef: any;
  handleSheetChanges: (index: number) => void;
  children: ReactNode;
  snapPoint: number;
  setSnapPoint: Dispatch<SetStateAction<number>>;
}

const BottomSheets = ({
  bottomSheetRef,
  handleSheetChanges,
  children,
  snapPoint,
  setSnapPoint,
}: BottomSheetProp) => {
  const handleClose = () => {
    bottomSheetRef?.current?.snapToIndex(1); // Snap to the closed position
    setSnapPoint(2); // Reset the snap point for the next open
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      onChange={handleSheetChanges}
      snapPoints={[1, snapPoint]}
      onClose={handleClose}>
      <BottomSheetView style={SBS.contentContainer}>{children}</BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheets;
