import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {configureProps} from 'react-native-reanimated/lib/typescript/ConfigHelper';
import {orderDecline} from '../Constants/Keywords';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomSheets from '../CustomComponents/BottomSheet';
import {AppImages} from '../Constants/images';
import Dialog from './Dialog';
const Feedback = ({snapPoint, setSnapPoint}) => {
  const refRBSheet = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={AppImages.tick.mark} />
        <Text style={styles.feedbackText}>
          Thank you so much for providing feedback.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => {
          setSnapPoint(1);
          setModalVisible(true);
        }}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      {/* <Dialog modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.modalText}>Save listing as a draft?</Text>
              <Text style={styles.modalDescriptionText}>
                Drafts let you save your unfinished listings, so you can
                complete it later
              </Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Save Draft</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  {borderWidth: 1, backgroundColor: 'white'},
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={[styles.textStyle, {color: 'rgba(8, 55, 107, 1)'}]}>
                  Discard
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    // backgroundColor: 'red',
  },
  innerContainer: {
    alignItems: 'center',
    gap: 15,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 1)',
  },

  homeButton: {
    // width: '90%',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: '700',
    padding: 10,
  },

  //Modal

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 20,
    // justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    borderRadius: 8,
    padding: 5,
    elevation: 2,
    backgroundColor: 'rgba(8, 55, 107, 1)',
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  modalText: {
    marginBottom: 15,
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(30, 26, 29, 1)',
  },
  modalDescriptionText: {
    marginBottom: 15,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(30, 26, 29, 1)',
  },
});
