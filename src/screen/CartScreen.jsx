// src/screen/CartScreen.js
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker'; // Ensure this package is installed
import dayjs from 'dayjs'; // Ensure dayjs is installed
import {useStepperContext} from '../contexts/StepperContext';

const CartScreen = () => {
  const {selectedDate, setSelectedDate} = useStepperContext(); // Access context

  const [date, setDate] = useState(dayjs('2014-10-20'));
  const [endDate, setEndDate] = useState(dayjs('2014-10-31'));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Date Range:</Text>
      <View style={styles.pickerContainer}>
        {/* <DateTimePicker
          mode="range"
          startDate={date}
          endDate={endDate}
          onChange={({startDate, endDate}) => {
            setDate(startDate);
            setEndDate(endDate);
          }}
        /> */}
        <DateTimePicker
          mode="single"
          date={date}
          onChange={params => setDate(params.date)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  pickerContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adds shadow for Android
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default CartScreen;
