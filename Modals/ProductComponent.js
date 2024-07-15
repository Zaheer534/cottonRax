import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {dress} from '../Constants/Keywords';
import {AppImages} from '../Constants/images';

const ProductComponent = () => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productDetailContainer}>
        <Text style={styles.productText}>{dress.itemStatus}</Text>
        <Text style={styles.productText}>{dress.item}</Text>
        <Text style={styles.productSecondText}>{dress.itemName}</Text>
        <Text style={styles.productText}>{dress.period}</Text>
        <Text style={styles.productSecondText}>{dress.borrowDate}</Text>
        <Text style={styles.productText}>{dress.cost}</Text>
        <Text style={styles.productSecondText}>{dress.costAmount}</Text>
        <Text style={styles.productText}>{dress.buy}</Text>
        <Text style={styles.productSecondText}>{dress.buyType}</Text>
      </View>
      <View style={styles.dressContainer}>
        <Image source={AppImages.productImg.dress} style={styles.dressImage} />
      </View>
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginHorizontal: 1,
    // backgroundColor: 'green',
  },
  productDetailContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: 20,
    // backgroundColor: 'pink',
  },
  productText: {
    fontSize: 11,
    fontWeight: '700',
    marginTop: 8,
    lineHeight: 22,
    color: 'rgba(84, 84, 84, 1)',
  },
  productSecondText: {
    fontSize: 11,
    fontWeight: '700',
    marginTop: 5,
    color: 'rgba(0, 0, 0, 1)',
  },
  dressContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 10,
    padding: 10,
    paddingLeft: 10,
  },
  dressImage: {
    width: 145,
    height: 270,
    // resizeMode: 'contain',
  },
});
