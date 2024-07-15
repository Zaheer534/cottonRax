import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {faq} from '../Constants/Keywords';

const FAQsComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>FAQs</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.innerTextHeading}>{faq.clean}</Text>
        <Text style={styles.innerTextDescription}>{faq.cleanAnswer}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.innerTextHeading}>{faq.notFit}</Text>
        <Text style={styles.innerTextDescription}>{faq.notFitAnswer}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.innerTextHeading}>{faq.itemRuin}</Text>
        <Text style={styles.innerTextDescription}>{faq.itemRuinAnswer}</Text>
      </View>
      <Text style={styles.additionalDescription}>
        Have additional questions?{' '}
        <Text
          style={{
            textDecorationLine: 'underline',
            fontSize: 10,
            fontWeight: '700',
          }}>
          See here for our full list of FAQs
        </Text>{' '}
        or message rax in the chat section of the app!
      </Text>
    </View>
  );
};

export default FAQsComponent;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
    padding: 20,
    margin: 22,
    gap: 10,
    // marginVertical: 5,
    borderRadius: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },
  innerContainer: {
    width: '100%',
    alignItems: 'flex-start',
    // justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    borderRadius: 10,
    // margin: 5,
  },
  innerTextHeading: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(84, 84, 84, 1)',
    margin: 5,
    // padding: 12,
    // marginTop: 10,
    // marginLeft: 12,
  },
  innerTextDescription: {
    fontSize: 11,
    fontWeight: '400',
    color: 'rgba(84, 84, 84, 1)',
    // padding: 5,
    lineHeight: 24,
    letterSpacing: 0.5,
    margin: 5,
  },
  additionalDescription: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(84, 84, 84, 1)',
    // padding: 18,
    lineHeight: 20,
    letterSpacing: 0.5,
    margin: 5,
    marginTop: 10,
  },
});
