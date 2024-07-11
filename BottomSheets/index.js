import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BottomSheets from '../CustomComponents/BottomSheet';
import Duration from './Duration';
import Period from './Period';
import Color from './Color';
import Size from './Size';
import Occasion from './Occasion';
import Category from './Category';
import SubCategory from './SubCategory';
import NewPayment from './NewPayment';
import OrderDecline from './OrderDecline';
import Feedback from './Feedback';

const SheetIndex = () => {
  const [snapPoint, setSnapPoint] = useState(1);
  const refRBSheet = useRef();
  const [bottomModal, setBottomModal] = useState('');
  const [selected, setSelected] = useState('');

  useEffect(() => {
    selected === 'Other' ? setSnapPoint(490) : setSnapPoint(420);
  }, [selected]);

  return (
    <View style={{flex: 1, gap: 10}}>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          setBottomModal('Duration');
          refRBSheet.current?.snapToIndex(1);
          setSnapPoint(290);
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Duration</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          setBottomModal('Payment');
          refRBSheet.current?.snapToIndex(1);
          setSnapPoint(300);
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          setBottomModal('Period');
          refRBSheet.current?.snapToIndex(1);
          setSnapPoint(430);
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Select Period</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          setBottomModal('Color');
          refRBSheet.current?.snapToIndex(1);
          setSnapPoint(430);
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Select Color</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          setBottomModal('Size');
          refRBSheet.current?.snapToIndex(1);
          setSnapPoint(430);
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Select Size</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          setBottomModal('Occasion');
          refRBSheet.current?.snapToIndex(1);
          setSnapPoint(430);
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Select Occasion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          setBottomModal('Category');
          refRBSheet.current?.snapToIndex(1);
          setSnapPoint(350);
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Select Category</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          setBottomModal('Order Decline');
          refRBSheet.current?.snapToIndex(1);
          setSelected('');
          setSnapPoint(420);
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Order Decline</Text>
      </TouchableOpacity>
      <BottomSheets
        bottomSheetRef={refRBSheet}
        handleSheetChanges={() => {}}
        snapPoint={snapPoint}
        setSnapPoint={setSnapPoint}>
        {bottomModal == 'Duration' ? (
          <Duration />
        ) : bottomModal == 'Payment' ? (
          <NewPayment />
        ) : bottomModal == 'Period' ? (
          <Period />
        ) : bottomModal == 'Color' ? (
          <Color />
        ) : bottomModal == 'Size' ? (
          <Size />
        ) : bottomModal == 'Occasion' ? (
          <Occasion />
        ) : bottomModal == 'Category' ? (
          <Category />
        ) : bottomModal == 'Order Decline' ? (
          <OrderDecline
            selected={selected}
            setSelected={setSelected}
            // bottomModal={bottomModal}
            setBottomModal={setBottomModal}
            snapPoint={snapPoint}
            setSnapPoint={setSnapPoint}
          />
        ) : bottomModal == 'Submit' ? (
          <Feedback snapPoint={snapPoint} setSnapPoint={setSnapPoint} />
        ) : null}
      </BottomSheets>
    </View>
  );
};

export default SheetIndex;

const styles = StyleSheet.create({});
