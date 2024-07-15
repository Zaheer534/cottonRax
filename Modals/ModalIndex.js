import {StyleSheet, Text, View, Modal, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ConnectAccount from './ConnectAccount';
import Payment from './Payment';
import Order from './Order';
import Listing from './Listing';
import CalendarComponent from './Calendar';
import PreLaunch from './PreLaunch';
import BorrowLocalPickup from './Borrow_local_pickup';
import BorrowConfirmation from './Borrow_confirmation';
import BorrowShipping from './Borrow_shipping';
import LenderLocalPickup from './Lender_local_pickup';
import LendConfirmation from './Lend_confirmation';
import LendShipping from './Lend_shipping';
import LendShippedBack from './Lend_shipped_back';
import Bonus_program from './Bonus_program';

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
      <TouchableOpacity
        style={[
          styles.modalContainer,
          {backgroundColor: 'rgba(8, 55, 107, 1)'},
        ]}
        onPress={() => {
          setBottomModal('BorrowLocal');
          setModalVisible(true);
        }}>
        <Text style={[styles.modalText, {color: 'white'}]}>
          Borrow_local_pickup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modalContainer,
          {backgroundColor: 'rgba(8, 55, 107, 1)'},
        ]}
        onPress={() => {
          setBottomModal('BorrowConfirm');
          setModalVisible(true);
        }}>
        <Text style={[styles.modalText, {color: 'white'}]}>
          Borrow_confirmation
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modalContainer,
          {backgroundColor: 'rgba(8, 55, 107, 1)'},
        ]}
        onPress={() => {
          setBottomModal('BorrowShip');
          setModalVisible(true);
        }}>
        <Text style={[styles.modalText, {color: 'white'}]}>
          Borrow_shippping
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modalContainer,
          {backgroundColor: 'rgba(8, 55, 107, 1)'},
        ]}
        onPress={() => {
          setBottomModal('LenderLocal');
          setModalVisible(true);
        }}>
        <Text style={[styles.modalText, {color: 'white'}]}>
          Lender_local_pickup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modalContainer,
          {backgroundColor: 'rgba(8, 55, 107, 1)'},
        ]}
        onPress={() => {
          setBottomModal('LenderConfirm');
          setModalVisible(true);
        }}>
        <Text style={[styles.modalText, {color: 'white'}]}>
          Lender_confirmaition
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modalContainer,
          {backgroundColor: 'rgba(8, 55, 107, 1)'},
        ]}
        onPress={() => {
          setBottomModal('LenderShip');
          setModalVisible(true);
        }}>
        <Text style={[styles.modalText, {color: 'white'}]}>
          Lender_shipping
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.modalContainer,
          {backgroundColor: 'rgba(8, 55, 107, 1)'},
        ]}
        onPress={() => {
          setBottomModal('LenderShipBack');
          setModalVisible(true);
        }}>
        <Text style={[styles.modalText, {color: 'white'}]}>
          Lender_shipped_back
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.modalContainer,
          {backgroundColor: 'rgba(8, 55, 107, 1)'},
        ]}
        onPress={() => {
          setBottomModal('Bonus');
          setModalVisible(true);
        }}>
        <Text style={[styles.modalText, {color: 'white'}]}>Bonus_program</Text>
      </TouchableOpacity>
      <Modal
        style={styles.modalBox}
        animationType="slide"
        transparent={true}
        // over
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
        ) : bottomModal == 'BorrowLocal' ? (
          <BorrowLocalPickup
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'BorrowConfirm' ? (
          <BorrowConfirmation
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'BorrowShip' ? (
          <BorrowShipping
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'LenderLocal' ? (
          <LenderLocalPickup
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'LenderConfirm' ? (
          <LendConfirmation
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'LenderShip' ? (
          <LendShipping
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'LenderShipBack' ? (
          <LendShippedBack
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : bottomModal == 'Bonus' ? (
          <Bonus_program
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
