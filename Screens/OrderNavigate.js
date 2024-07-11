import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrderNavigate = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
        Navigated
      </Text>
    </View>
  );
};

export default OrderNavigate;

const styles = StyleSheet.create({});
