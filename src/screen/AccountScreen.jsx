import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

function AccountScreen({navigation}) {
  const onPress = () => {
    console.log('+++++++');
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Bck to Home page</Text>
      </TouchableOpacity>
    </View>
  );
}
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
