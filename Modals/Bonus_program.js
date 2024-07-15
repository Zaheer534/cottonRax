import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {AppImages} from '../Constants/images';
import {ads, dailyCheck, detail, score, task} from '../Constants/Keywords';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const Bonus_program = ({modalVisible, setModalVisible}) => {
  const renderDailyCheck = ({item}) => {
    return (
      <>
        <View>
          <View style={styles.checkContainer}>
            <Text style={styles.chectInText}>{item.text}</Text>
            <Image
              style={{width: '50%'}}
              source={item.img}
              resizeMode="contain"
            />
          </View>
          <View style={{margin: 5, left: 5}}>
            <Text style={styles.daysText}>{item.day}</Text>
          </View>
        </View>
      </>
    );
  };
  const renderTask = ({item}) => {
    return (
      <View style={styles.taskContianer}>
        <View style={{flexDirection: 'row', gap: 12}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{top: 2, width: 30, height: 30}}
              source={item.image}
            />
          </View>
          <View>
            <Text style={styles.descriptionText}>{item.description}</Text>
            <Text style={styles.bText}>{item.bonus}</Text>
          </View>
        </View>

        <TouchableOpacity>
          <LinearGradient
            style={[styles.getButton]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(84, 112, 254, 1)', 'rgba(250, 103, 198, 1)']}>
            <Text style={styles.btnText}>{item.button}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  const renderAds = ({item}) => {
    return (
      <View style={[styles.taskContianer]}>
        {/* <View style={{flexDirection: 'row', gap: 12}}> */}
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image style={{top: 2, width: 30, height: 30}} source={item.image} />
          <Text style={[styles.bText, {fontSize: 14, fontWeight: '600'}]}>
            {item.bonus}
          </Text>
        </View>
        {/* </View> */}

        <TouchableOpacity>
          <LinearGradient
            style={[styles.getButton]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(84, 112, 254, 1)', 'rgba(250, 103, 198, 1)']}>
            <Text style={styles.btnText}>{item.button}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={AppImages.bonusImg.background}
          imageStyle={
            {
              // height: 2150,
            }
          }
          resizeMode="stretch">
          <View style={styles.back}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image
                style={styles.backImg}
                source={AppImages.bonusImg.back}
                resizeMode="center"
              />
            </TouchableOpacity>
            <View style={styles.bonusText}>
              <Text style={styles.score}>{score.bonus}</Text>
              <Text style={styles.score}>{score.points}</Text>
            </View>
          </View>
          <View style={styles.innerContainer}>
            <View style={{margin: 15}}>
              <Text style={styles.titleText}>Daily Check-in</Text>
              <Text
                style={[
                  styles.descriptionText,
                  {color: 'rgba(141, 141, 141, 1)', fontSize: 12},
                ]}>
                Earn rewards for check-in
              </Text>
            </View>
            <FlatList
              horizontal={true}
              data={dailyCheck}
              contentContainerStyle={{gap: 5, padding: 10}}
              renderItem={renderDailyCheck}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <LinearGradient
                  style={[styles.button]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['rgba(84, 112, 254, 1)', 'rgba(250, 103, 198, 1)']}>
                  <Text style={[styles.buttonText]}>Get Daily Bonus</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{margin: 15}}>
              <Text style={styles.titleText}>Task for Beginners</Text>
              <Text
                style={[
                  styles.descriptionText,
                  {color: 'rgba(141, 141, 141, 1)', fontSize: 12},
                ]}>
                Only one chance
              </Text>
            </View>
            <FlatList
              //   horizontal={true}
              data={task}
              contentContainerStyle={{gap: 5, padding: 10}}
              renderItem={renderTask}
            />
            <View style={{margin: 15}}>
              <Text style={styles.titleText}>Watch Ads, Earn Bonus</Text>
              <Text style={styles.descriptionText}>
                Watch all ads, get extra rewards{'  '}
                <Text style={styles.bText}>+ 20 Bonus</Text>
              </Text>
            </View>
            <FlatList
              //   horizontal={true}
              data={ads}
              contentContainerStyle={{gap: 5, padding: 10}}
              renderItem={renderAds}
            />
          </View>

          <View style={{margin: 15, gap: 5}}>
            <Text style={styles.titleText}>Description</Text>
            <Text style={[styles.descriptionText, {fontSize: 11}]}>
              1. {detail.interpretation}
            </Text>
            <Text style={[styles.descriptionText, {fontSize: 11}]}>
              2. {detail.bonus}
            </Text>
            <Text style={[styles.descriptionText, {fontSize: 11}]}>
              3. {detail.coins}
            </Text>
            <Text style={[styles.descriptionText, {fontSize: 11}]}>
              4. {detail.limit}
            </Text>
            <Text style={[styles.descriptionText, {fontSize: 11}]}>
              1. {detail.signIn}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Bonus_program;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  back: {
    margin: 15,
    top: 40,
  },
  backImg: {
    marginVertical: 20,
    width: 10,
    height: 20,
  },
  score: {
    fontSize: 17,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
    lineHeight: 25.5,
  },
  bonusText: {
    marginLeft: 15,
  },
  innerContainer: {
    // alignSelf: 'center',
    // alignItems: 'center',
    margin: 13,
    top: 20,
    backgroundColor: 'rgba(30, 30, 30, 1)',
    marginVertical: 50,
    borderRadius: 15,
    // height: 600,
  },
  titleText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 1)',
  },
  checkContainer: {
    backgroundColor: 'rgba(46, 49, 56, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    // display: 'flex',
    left: 3,
    paddingTop: 15,
    // padding: 5,
    width: width * 0.112,
    borderRadius: 11,
  },
  chectInText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(135, 135, 135, 1)',
  },
  daysText: {
    fontSize: 10,
    fontWeight: '500',
    color: 'rgba(141, 141, 141, 1)',
  },
  buttonContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  button: {
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    padding: 10,
  },
  taskContianer: {
    backgroundColor: 'rgba(46, 49, 56, 1)',
    alignSelf: 'center',
    justifyContent: 'space-between',
    gap: 30,
    marginVertical: 5,
    padding: 13,
    width: '93%',
    borderRadius: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 107, 197, 1)',
  },
  getButton: {
    width: 60,
    height: 25,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
    padding: 3,
  },
});
