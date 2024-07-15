import {
  FlatList,
  Image,
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
import {confirm, nextSteps, steps} from '../Constants/Keywords';
import FAQsComponent from './FaqComponent';

const BorrowConfirmation = ({modalVisible, setModalVisible}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        // flex: 1,
        height: 1330,
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
            {confirm.recieve}
            <Text style={styles.boldText}>{confirm.email}</Text>
            {''}
            <Text style={styles.normalText}>{confirm.details}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.goBtnText}>View order details</Text>
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

export default BorrowConfirmation;

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
    marginVertical: 0,
    left: 15,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  normalText: {
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 17,
    color: 'rgba(0, 0, 0, 1)',
  },
  boldText: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 17,
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
