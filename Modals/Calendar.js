import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AppImages} from '../Constants/images';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';

const CalendarComponent = ({modalVisible, setModalVisible}) => {
  const [selected, setSelected] = useState(new Date());

  return (
    <View style={styles.mainContainer}>
      <View style={styles.calenderOutput}>
        <Text style={styles.outputText}>
          {moment(new Date(selected))?.format('ddd, MMM DD')}
        </Text>
      </View>
      <View style={styles.calendarContainer}></View>
      <Calendar
        style={{
          borderTopWidth: 1,
          borderColor: 'rgba(230, 230, 230, 1)',
          //   height: 350,
        }}
        // tileDisabled={tileDisabled}
        onDayPress={day => {
          setSelected(day.dateString);
          //   console.log('selected day', day);
        }}
        minDate={new Date()}
        disableAllTouchEventsForDisabledDays={true}
        hideExtraDays={true}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'rgba(4, 30, 59, 1)',
          },
        }}
        theme={{
          todayTextColor: 'orange',
          todayBackgroundColor: 'black',
          todayBorderWidth: 1,
          selectedDayBackgroundColor: 'rgba(4, 30, 59, 1)',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          alignItems: 'flex-end',
          margin: 7,
          gap: 5,
        }}>
        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.okBtn}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.okBtnText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalendarComponent;

const styles = StyleSheet.create({
  mainContainer: {
    // margin: 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
  },
  calenderOutput: {
    // alignItems: 'center',
    margin: 10,
  },
  outputText: {
    marginHorizontal: 10,
    fontSize: 32,
    fontWeight: '400',
    color: 'rgba(29, 27, 32, 1)',
    lineHeight: 40,
  },
  calendarContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
  },

  cancelBtn: {
    // alignSelf: 'center',
    // backgroundColor: 'rgba(8, 55, 107, 1)',
    borderRadius: 8,
    alignSelf: 'center',
  },
  cancelBtnText: {
    padding: 10,
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(103, 80, 164, 1)',
  },
  okBtn: {
    // alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
  okBtnText: {
    padding: 10,
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(103, 80, 164, 1)',
  },
});
