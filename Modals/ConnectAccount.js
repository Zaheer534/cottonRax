import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppImages} from '../Constants/images';

const ConnectAccount = ({modalVisible, setModalVisible}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{marginLeft: 10, alignSelf: 'center'}}
          source={AppImages.accountPic.rect}
        />
      </View>
      <View>
        <Text style={styles.descriptionText}>
          It seems that you have not connected your bank account. Connect your
          bank account to get paid out!
        </Text>
      </View>
      <View style={{margin: 5, gap: 5}}>
        <TouchableOpacity style={styles.connectBtn}>
          <Text style={styles.connectBtnText}>Connect Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.laterBtn}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.laterBtnText}>Do it later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConnectAccount;

const styles = StyleSheet.create({
  mainContainer: {
    // margin: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
  },
  descriptionText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '400',
  },
  connectBtn: {
    // alignSelf: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
    borderRadius: 8,
    alignItems: 'center',
  },
  connectBtnText: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  laterBtn: {
    // alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgba(8, 55, 107, 1)',
    borderRadius: 8,
    alignItems: 'center',
  },
  laterBtnText: {
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(8, 55, 107, 1)',
  },
});
