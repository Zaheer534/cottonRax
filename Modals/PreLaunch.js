import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppImages} from '../Constants/images';
import SocialLinkComponent from './SocialComponents';

const PreLaunch = ({modalVisible, setModalVisible}) => {
  return (
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
          <Text style={styles.eyeText}>
            Keep your eyes open,{'\n'}and your inbox refreshed.{' '}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={{width: '41%', height: 94}}
            source={AppImages.eyes.googlyEyes}
          />
        </View>
        <View>
          <Text style={[styles.eyeText, {fontSize: 12, fontWeight: '400'}]}>
            Next week we're launching rax 2.0.{'\n'}The new app is{' '}
            <Text style={{fontWeight: '700'}}>
              easier. faster. smarter. more beautiful.
            </Text>
            {'\n'}
            {'\n'}
            That's all we can say for now...
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.goBtn}
        onPress={() => setModalVisible(false)}>
        <Text style={styles.goBtnText}>go to rax</Text>
      </TouchableOpacity>
      <SocialLinkComponent />
    </View>
  );
};

export default PreLaunch;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
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
    backgroundColor: 'rgba(255, 243, 176, 1)',
    padding: 15,
  },
  imageContainer: {
    alignItems: 'center',
  },
  eyeText: {
    padding: 20,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 24,
  },
  goBtn: {
    // marginVertical: 1,
    // alignSelf: 'center',
    margin: 5,
    width: '35%',
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
