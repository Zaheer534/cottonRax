import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {configureProps} from 'react-native-reanimated/lib/typescript/ConfigHelper';
import {orderDecline} from '../Constants/Keywords';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomSheets from '../CustomComponents/BottomSheet';
const OrderDecline = ({
  selected,
  setSelected,
  bottomModal,
  setBottomModal,
  snapPoint,
  setSnapPoint,
}) => {
  const [value, setValue] = useState('');
  const refRBSheet = useRef();
  const RenderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            setSelected(item.text);
          }}
          style={{
            flexDirection: 'row',
            //   margin: 5,
            marginVertical: 10,
            justifyContent: 'flex-start',
            gap: 10,
          }}>
          <Text>
            <MaterialIcons
              name={
                selected !== item.text
                  ? 'radio-button-unchecked'
                  : 'radio-button-checked'
              }
              size={20}
              color={selected == item.text ? 'rgba(8, 55, 107, 1)' : 'black'}
            />
          </Text>
          <Text>{item.text}</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.declineText}>
          What is the reason for declining the order?
        </Text>
        <View style={styles.divider}></View>
      </View>

      <FlatList data={orderDecline} renderItem={RenderItem} />
      {selected == 'Other' ? (
        // <View style={styles.reason}>
        <TextInput
          multiline={true}
          value={value}
          onChangeText={setValue}
          placeholder="(optional) Could you please let the borrower know the reason for
            declining?"
          style={styles.reasonText}
        />
      ) : null}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setBottomModal('Submit');
          refRBSheet.current?.snapToIndex(1);
          setSnapPoint(210);
        }}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderDecline;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  innerContainer: {
    alignItems: 'center',
    gap: 15,
  },
  declineText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 1)',
  },
  divider: {
    width: 335,
    // height: 0,
    backgroundColor: 'rgba(230, 230, 230, 1)',
    borderWidth: 0.3,
    borderColor: 'rgba(117, 117, 117, 1)',
    alignSelf: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
    borderRadius: 8,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: '700',
    padding: 10,
  },
  reason: {
    backgroundColor: 'rgba(230, 230, 230, 1)',
    bottom: 12,
    borderRadius: 8,
  },
  reasonText: {
    fontSize: 16,
    // height: 150,
    fontWeight: '400',
    padding: 10,
    backgroundColor: 'rgba(230, 230, 230, 1)',
    borderRadius: 8,
    bottom: 12,
  },
});
