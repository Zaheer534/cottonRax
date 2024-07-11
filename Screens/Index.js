import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const OnboardingIndex = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('OnboardingScreen')}
        style={{marginTop: 10, borderRadius: 8, backgroundColor: 'orange'}}>
        <Text style={{padding: 10}}>OnboardingIndex</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('My Orders')}
        style={{marginTop: 10, borderRadius: 8, backgroundColor: 'orange'}}>
        <Text style={{padding: 10}}>My Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingIndex;

const styles = StyleSheet.create({});
