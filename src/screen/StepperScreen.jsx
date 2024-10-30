import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import CartScreen from './CartScreen';

// Example Components for Each Step
// const CartScreen = () => <Text style={styles.componentText}>Cart Screen</Text>;
const DeliveryAddressScreen = () => (
  <Text style={styles.componentText}>Delivery Address Screen</Text>
);
const OrderSummaryScreen = () => (
  <Text style={styles.componentText}>Order Summary Screen</Text>
);
const PaymentMethodScreen = () => (
  <Text style={styles.componentText}>Payment Method Screen</Text>
);
const TrackOrderScreen = () => (
  <Text style={styles.componentText}>Track Order Screen</Text>
);

const StepperScreen = ({onComplete}) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const stepLabels = [
    'Cart',
    'Delivery Address',
    'Order Summary',
    'Payment Method',
    'Track',
  ];

  // Array of Components to Render for Each Step
  const stepComponents = [
    <CartScreen />,
    <DeliveryAddressScreen />,
    <OrderSummaryScreen />,
    <PaymentMethodScreen />,
    <TrackOrderScreen />,
  ];

  const handleNext = () => {
    if (currentPosition < stepLabels.length - 1) {
      setCurrentPosition(currentPosition + 1);
    } else {
      Alert.alert('Stepper Complete!', 'You have completed all the steps.', [
        {text: 'OK', onPress: onComplete},
      ]);
    }
  };

  const handlePrevious = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Render Component Based on Current Step */}
        {stepComponents[currentPosition]}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Previous"
            onPress={handlePrevious}
            disabled={currentPosition === 0}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Next"
            onPress={handleNext}
            // disabled={currentPosition === stepLabels.length - 1}
          />
        </View>
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
    padding: 20,
  },
  content: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200, // Adjust height based on your content
  },
  componentText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 50,
  },
});

export default StepperScreen;
