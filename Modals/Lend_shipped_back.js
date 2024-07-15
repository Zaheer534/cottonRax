import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppImages} from '../Constants/images';
import SocialLinkComponent from './SocialComponents';
import ProductComponent from './ProductComponent';
import {
  lenderConfirm,
  lenderShipBack,
  nextSteps,
  shippingDescription,
  steps,
} from '../Constants/Keywords';
import FAQsComponent from './FaqComponent';

const LendShippedBack = ({modalVisible, setModalVisible}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        // flex: 1,
        height: 1420,
        // backgroundColor: 'green',
      }}
      style={{flex: 1}}
      scrollEnabled
      nestedScrollEnabled>
      <View style={styles.mainContainer}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <View style={styles.logoContainer}>
            <Image
              style={{
                // alignSelf: 'center',
                alignItems: 'center',
                //   justifyContent: 'center',
              }}
              source={AppImages.raxLogo.logo}
            />
          </View>
          <Text style={styles.logoText}>rax</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>
            Canada’s peer-to-peer wardrobe rental app
          </Text>
        </View>
        <View style={styles.updateContianer}>
          <View>
            <Text style={styles.eyeText}>Your borrow details</Text>
          </View>
        </View>
        <View>
          <ProductComponent />
        </View>
        <View style={styles.description}>
          <Text style={styles.normalText}>
            {lenderShipBack.shippedBack}{' '}
            <TouchableOpacity style={{flexDirection: 'row', marginTop: 20}}>
              <Text
                style={[styles.boldText, {textDecorationLine: 'underline'}]}>
                {lenderShipBack.email}
              </Text>
            </TouchableOpacity>{' '}
            <Text style={styles.normalText}>{lenderShipBack.details}</Text>
          </Text>
          <Text
            style={[
              styles.normalText,
              {
                fontSize: 18,
                fontWeight: '700',
                lineHeight: 24,
              },
            ]}>
            {lenderShipBack.next}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.normalText}>1. </Text>
            <Text style={styles.normalText}>{lenderShipBack.review}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.normalText}>2. </Text>
            <Text style={styles.normalText}>
              {lenderShipBack.redeem}{' '}
              <TouchableOpacity>
                <Text
                  style={[
                    styles.boldText,
                    {
                      fontWeight: '400',
                      textDecorationLine: 'underline',
                      color: 'rgba(8, 55, 107, 1)',
                    },
                  ]}>
                  {lenderShipBack.here}
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.normalText}>3. </Text>
            <Text style={styles.normalText}>{lenderShipBack.clean} </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.goBtnText}>Track package</Text>
        </TouchableOpacity>
        <View>
          <FAQsComponent />
        </View>
        <View>
          <SocialLinkComponent />
        </View>
      </View>
    </ScrollView>
  );
};

export default LendShippedBack;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex: 1,
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoContainer: {
    backgroundColor: 'rgba(255, 215, 0, 1)',
    borderRadius: 50,
    height: 40,
    width: '12%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 42,
    fontWeight: '400',
    color: 'rgba(8, 55, 107, 1)',
  },
  heading: {
    width: '100%',
    backgroundColor: 'rgba(255, 215, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headingText: {
    fontSize: 14,
    fontWeight: '500',
    // padding: 20,
  },
  updateContianer: {
    // backgroundColor: 'rgba(255, 243, 176, 1)',
    padding: 0,
    marginVertical: 3,
  },
  description: {
    marginHorizontal: 10,
    left: 5,
    gap: 2,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  normalText: {
    textAlign: 'left',
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 1)',
  },
  boldText: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 1)',
  },
  imageContainer: {
    alignItems: 'center',
  },
  eyeText: {
    padding: 5,
    marginTop: 10,
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 24,
    color: 'rgba(8, 55, 107, 1)',
  },
  Btn: {
    // marginVertical: 1,
    // alignSelf: 'center',
    margin: 5,
    width: '52%',
    backgroundColor: 'rgba(8, 55, 107, 1)',
    borderRadius: 8,
    alignItems: 'center',
    top: 5,
  },
  goBtnText: {
    color: 'white',
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
  },
});
