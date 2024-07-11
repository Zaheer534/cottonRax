import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import {BuyerImages} from './images';
import {openLink} from './OpenSocialMediaLinks';
import {AppImages} from '../Constants/images';

const SocialLinkComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={url => {
            openLink('https://www.instagram.com/');
          }}>
          <Image source={AppImages.SocialImages.insta} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://www.linkedin.com/feed/');
          }}>
          <Image
            source={AppImages.SocialImages.linkedin}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://www.tiktok.com/explore');
          }}>
          <Image source={AppImages.SocialImages.tiktok} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://play.google.com/store/games?hl=en');
          }}>
          <Image
            source={AppImages.SocialImages.playstore}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://www.apple.com/');
          }}>
          <Image source={AppImages.SocialImages.apple} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://mail.google.com/mail/');
          }}>
          <Image source={AppImages.SocialImages.gmail} style={styles.icons} />
        </TouchableOpacity>
      </View>
      <Text style={styles.additionalDescription}>
        Want to change how you receive these emails? You can update or
        unsubscribe <Text style={{fontWeight: '700'}}>your preferences</Text> or{' '}
        <Text style={{fontWeight: '700'}}>unsubscribe</Text>
      </Text>
      <Text style={styles.copyRight}>
        Copyright (C) 2024 rax. All rights reserved
      </Text>
    </View>
  );
};

export default SocialLinkComponent;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
    padding: 15,
    margin: 10,
    borderRadius: 15,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    borderRadius: 10,
    marginTop: 5,
  },
  icons: {
    // width: 20,
    // height: 20,
    margin: 15,
  },
  additionalDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(84, 84, 84, 1)',
    // padding: 18,
    lineHeight: 24,
    // letterSpacing: 0.5,
    // margin: 5,
    marginTop: 5,
    marginRight: 15,
  },
  copyRight: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(84, 84, 84, 1)',
    // padding: 18,
    lineHeight: 24,
    // letterSpacing: 0.5,
    // margin: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
    marginHorizontal: 6,
  },
});
