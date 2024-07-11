import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useRef} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  category,
  color,
  duration,
  occasion,
  period,
  size,
} from '../Constants/Keywords';
import BottomSheets from '../CustomComponents/BottomSheet';
import {Divider} from '@rneui/themed';
import {AppImages} from '../Constants/images';
import SubCategory from './SubCategory';
const Category = () => {
  const [isSelected, setSelection] = useState(false);
  const [snapPoint, setSnapPoint] = useState(1);
  const refRBSheet = useRef();
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{category.choose}</Text>
      </View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          refRBSheet.current?.snapToIndex(1);
          setSnapPoint(780);
        }}>
        <Text style={styles.text}>{category.men}</Text>
        <Image source={AppImages.arrow.right} />
      </TouchableOpacity>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{category.women}</Text>
        <Image source={AppImages.arrow.right} />
      </TouchableOpacity>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{category.kids}</Text>
        <Image source={AppImages.arrow.right} />
      </TouchableOpacity>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{category.unisex}</Text>
        <Image source={AppImages.arrow.right} />
      </TouchableOpacity>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{category.maternity}</Text>
        <Image source={AppImages.arrow.right} />
      </TouchableOpacity>

      <BottomSheets
        bottomSheetRef={refRBSheet}
        handleSheetChanges={() => {}}
        snapPoint={snapPoint}
        setSnapPoint={setSnapPoint}>
        <SubCategory />
      </BottomSheets>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  titleContainer: {
    margin: 5,
    gap: 7,
    width: '93%',

    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  container: {
    margin: 7,
    marginVertical: 17,
    width: '88%',
    flexDirection: 'row',

    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  titleText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 24,
    fontWeight: '700',
    top: 7,
  },
  text: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
    // top: 5,
  },
  divider: {
    width: 335,
    // height: 0,
    backgroundColor: 'rgba(117, 117, 117, 1)',
    borderWidth: 0.3,
    borderColor: 'rgba(117, 117, 117, 1)',
    alignSelf: 'center',
  },
});
