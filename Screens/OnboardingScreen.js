import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {AppImages} from '../Constants/images';
import {useNavigation} from '@react-navigation/native';

const Round = ({isLight, selected}) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? 'rgba(255, 215, 0, 1)' : 'rgba(84, 84, 84, 1)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        width: 12,
        height: 12,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 10,
        bottom: 16,
      }}
    />
  );
};

const Next = ({isLight, ...props}) => (
  <TouchableOpacity
    {...props}
    style={{
      width: '45%',
      alignItems: 'center',
      right: 10,
      borderRadius: 8,
      backgroundColor: 'rgba(8, 55, 107, 1)',
    }}>
    <Text
      style={{
        padding: 8,
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
      }}>
      Next
    </Text>
  </TouchableOpacity>
);

const Done = ({isLight, ...props}) => (
  <TouchableOpacity
    {...props}
    style={{
      width: '45%',
      alignItems: 'center',
      right: 10,
      borderRadius: 8,
      backgroundColor: 'rgba(8, 55, 107, 1)',
    }}>
    <Text
      style={{
        padding: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
      }}>
      Done
    </Text>
  </TouchableOpacity>
);

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      {/* <View style={styles.upperContainer}></View>
      <View style={styles.innerContainer}></View>
      <View style={styles.lowerContainer}></View> */}
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DotComponent={Round}
        NextButtonComponent={Next}
        DoneButtonComponent={props => <Done {...props} />}
        bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: 'white',
            image: (
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="contain"
                  style={{position: 'absolute', top: 40}}
                  source={AppImages.onboardingImgs.outfit}
                />
              </View>
            ),
            title: 'Borrow the perfect outfit for any\noccasion',
            subtitle: '',
            titleStyles: styles.title,
          },
          {
            backgroundColor: 'white',
            image: (
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="cover"
                  // style={styles.image}
                  style={{
                    position: 'absolute',
                    top: 37,
                    width: '80%',
                    height: 570,
                  }}
                  source={AppImages.onboardingImgs.sell}
                />
              </View>
            ),
            title: 'Lend or sell your own clothes to earn\nextra cash!',
            subtitle: '',
            titleStyles: styles.title,
          },
          {
            backgroundColor: 'white',
            image: (
              <View style={styles.imageContainer}>
                <Image
                  // resizeMode="cover"
                  // style={styles.image}
                  style={{
                    position: 'absolute',
                    top: 35,
                    width: '84%',
                    height: 575,
                  }}
                  source={AppImages.onboardingImgs.rent}
                />
              </View>
            ),
            title: 'Reduce waste by sharing your favorite\nclothes',
            subtitle: '',
            titleStyles: styles.title,
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  upperContainer: {
    flex: 0.65,
    backgroundColor: 'yellow',
  },
  innerContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    top: 10,
    backgroundColor: 'orange',
  },
  lowerContainer: {
    flex: 0.35,
    backgroundColor: 'white',
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    bottom: 42,
    height: 507,
    backgroundColor: 'rgba(255, 243, 176, 1)',
  },
  image: {
    // width: '60%',
    // height: '100%',
    paddingTop: 30,
  },
  title: {
    top: 10,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'center',
    // marginVertical: 10,
    // paddingTop: 10,
  },
});
