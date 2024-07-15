import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const OnboardingIndex = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('OnboardingScreen')}
        style={{marginTop: 10, borderRadius: 8, backgroundColor: 'orange'}}>
        <Text style={{padding: 3}}>OnboardingIndex</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('My Orders')}
        style={{marginTop: 10, borderRadius: 8, backgroundColor: 'orange'}}>
        <Text style={{padding: 3}}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Borrow local')}
        style={{marginTop: 10, borderRadius: 8, backgroundColor: 'orange'}}>
        <Text style={{padding: 3}}>Borrow_local_pickup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingIndex;

const styles = StyleSheet.create({});
