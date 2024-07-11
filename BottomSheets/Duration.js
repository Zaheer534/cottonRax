import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {duration} from '../Constants/Keywords';
import {Divider} from '@rneui/themed';
const Duration = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{duration.four}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{duration.ten}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{duration.twenty}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{duration.thirty}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
    </View>
  );
};

export default Duration;

const styles = StyleSheet.create({
  durationContainer: {
    margin: 18,
    width: '93%',
    flexDirection: 'row',

    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  durationText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
    top: 7,
  },
  divider: {
    width: 345,
    // height: 0,
    backgroundColor: 'rgba(117, 117, 117, 1)',
    borderWidth: 0.3,
    borderColor: 'rgba(117, 117, 117, 1)',
    alignSelf: 'center',
  },
});
