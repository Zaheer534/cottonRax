import {StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ConnectAccount from './ConnectAccount';
import Payment from './Payment';
import Order from './Order';
import Listing from './Listing';
import CalendarComponent from './Calendar';
import PreLaunch from './PreLaunch';

const ModalIndex = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [bottomModal, setBottomModal] = useState('');

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => {
          setBottomModal('Account');
          setModalVisible(true);
        }}>
        <Text style={styles.modalText}>Account Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => {
          setBottomModal('Payment');
          setModalVisible(true);
        }}>
        <Text style={styles.modalText}>Payment Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => {
          setBottomModal('Order');
          setModalVisible(true);
        }}>
        <Text style={styles.modalText}>Order Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => {
          setBottomModal('Listing');
          setModalVisible(true);
        }}>
        <Text style={styles.modalText}>Listing Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => {
          setBottomModal('Calendar');
          setModalVisible(true);
        }}>
        <Text style={styles.modalText}>Open Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => {
          setBottomModal('PreLaunch');
          setModalVisible(true);
        }}>
        <Text style={styles.modalText}>Open Pre Launch</Text>
      </TouchableOpacity>
      <Modal
        style={styles.modalBox}
        animationType="slide"
        transparent={true}
        over
        visible={modalVisible}>
        {bottomModal == 'Account' ? (
          <ConnectAccount
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'Payment' ? (
          <Payment
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'Order' ? (
          <Order
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'Listing' ? (
          <Listing
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'Calendar' ? (
          <CalendarComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'PreLaunch' ? (
          <PreLaunch
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : null}
      </Modal>
    </View>
  );
};

export default ModalIndex;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  modalText: {
    fontSize: 12,
    fontWeight: '700',
    padding: 7,
    color: 'black',
  },
  modalBox: {
    alignItems: 'center',
    alignSelf: 'center',
    // justifyContent: 'center',
  },
});
