import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {color, duration, occasion, period, size} from '../Constants/Keywords';
import {Divider} from '@rneui/themed';
const Occasion = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{occasion.choose}</Text>
        <Text style={[styles.titleText, {fontSize: 14, fontWeight: '400'}]}>
          {occasion.apply}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.formal}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.work}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.vacation}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.wedding}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.prom}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.festival}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
    </View>
  );
};

export default Occasion;

const styles = StyleSheet.create({
  titleContainer: {
    margin: 5,
    gap: 5,
    width: '93%',

    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  container: {
    margin: 7,
    marginVertical: 12,
    width: '90%',
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
