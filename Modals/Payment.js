import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppImages} from '../Constants/images';
import {payment} from '../Constants/Keywords';

const Payment = ({modalVisible, setModalVisible}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{margin: 10}}>
        <Text style={styles.paymentHeader}>
          Your Payment is being{'\n'}processed
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{marginLeft: 20, alignSelf: 'flex-start'}}
          source={AppImages.paymentPic.pay}
        />
      </View>
      <View>
        <Text style={styles.descriptionText}>
          The money will be in your bank account in 3-5 business days
        </Text>
      </View>
      <View style={{margin: 5, gap: 5}}>
        {/* <TouchableOpacity style={styles.connectBtn}>
          <Text style={styles.connectBtnText}>Show Account</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.homeBtnText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  mainContainer: {
    // width: '98%',
    // margin: 3,
    marginLeft: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
  },
  paymentHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  descriptionText: {
    // marginLeft: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 1)',
  },

  homeBtn: {
    // alignSelf: 'center',
    width: '98%',
    right: 5,
    backgroundColor: 'rgba(8, 55, 107, 1)',
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  homeBtnText: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
});
