import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {address, duration, payment, unpause} from '../Constants/Keywords';
import {Divider} from '@rneui/themed';

import CheckBox from '@react-native-community/checkbox';
import {AppImages} from '../Constants/images';

const NewPayment = () => {
  const refRBSheet = useRef();
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{payment.newPay}</Text>
        <Image source={AppImages.add.plus} />
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <View>
          <Image source={AppImages.pay.visa} style={{left: 0}} />
        </View>
        <View style={styles.accountContainer}>
          <Text style={styles.subText}>{payment.number}</Text>
          <Text style={styles.subText}>{payment.exp}</Text>
        </View>
        <View>
          <CheckBox
            style={{right: 10}}
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
          />
        </View>
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <View>
          <Image source={AppImages.pay.visa} style={{left: 0}} />
        </View>
        <View style={styles.accountContainer}>
          <Text style={styles.subText}>{payment.number}</Text>
          <Text style={styles.subText}>{payment.exp}</Text>
        </View>
        <View>
          <CheckBox
            style={{right: 10}}
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
          />
        </View>
      </View>
      <View style={styles.divider}>{/* <Text>dfmskfn</Text> */}</View>
      <View style={styles.container}>
        <View>
          <Image source={AppImages.pay.visa} style={{left: 0}} />
        </View>
        <View style={styles.accountContainer}>
          <Text style={styles.subText}>{payment.number}</Text>
          <Text style={styles.subText}>{payment.exp}</Text>
        </View>

        <View>
          <CheckBox
            style={{right: 10}}
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
          />
        </View>
      </View>
    </View>
  );
};

export default NewPayment;

const styles = StyleSheet.create({
  container: {
    margin: 17,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
  },
  accountContainer: {
    width: '65%',
    alignSelf: 'flex-start',
    // backgroundColor: 'green',
  },
  subText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    alignSelf: 'flex-start',
    right: 10,
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
