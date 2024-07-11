import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {color, duration, period} from '../Constants/Keywords';
import {Divider} from '@rneui/themed';
const Color = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{color.select}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{color.black}</Text>
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{color.green}</Text>
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{color.white}</Text>
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{color.grey}</Text>
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{color.cream}</Text>
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{color.beige}</Text>
      </View>
    </View>
  );
};

export default Color;

const styles = StyleSheet.create({
  titleContainer: {
    margin: 5,
    width: '93%',
    flexDirection: 'row',

    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  container: {
    margin: 18,
    marginHorizontal: 6,
    width: '93%',
    flexDirection: 'row',

    justifyContent: 'flex-start',
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
    top: 7,
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
