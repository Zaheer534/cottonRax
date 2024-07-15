import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppImages} from '../Constants/images';
import {payment} from '../Constants/Keywords';

const Listing = ({modalVisible, setModalVisible}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{margin: 10}}>
        <Text style={styles.paymentHeader}>Listing Created Successfully</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{marginLeft: 20, alignSelf: 'flex-start'}}
          source={AppImages.listingPic.list}
        />
      </View>

      <View style={{margin: 5, gap: 5}}>
        <TouchableOpacity style={styles.pickupBtn}>
          <Text style={styles.pickupBtnText}>Add another listing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.browseBtn}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.browseBtnText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Listing;

const styles = StyleSheet.create({
  mainContainer: {
    width: '98%',
    margin: 3,
    // marginLeft: 10,
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
    padding: 22,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 1)',
  },
  pickupBtn: {
    // alignSelf: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
    borderRadius: 8,
    alignItems: 'center',
  },
  pickupBtnText: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  browseBtn: {
    borderWidth: 1,
    borderColor: 'rgba(8, 55, 107, 1)',
    borderRadius: 8,
    alignItems: 'center',
  },
  browseBtnText: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(8, 55, 107, 1)',
  },
});
