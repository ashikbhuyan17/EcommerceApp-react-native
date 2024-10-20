import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Tags from '../components/Tags';

function HomeScreen({navigation}) {
  const onPress = () => {
    console.log('+++++++');
    navigation.navigate('Account');
  };
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      {/* <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Go to Account page</Text>
        </TouchableOpacity>
      </View> */}
      <Header />
      <View>
        <Text style={styles.headingText}>Match Your Style</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/search.png')}
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search" style={styles.textInput} />
        </View>
      </View>
      <Tags />
    </LinearGradient>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingHorizontal: 10,
    padding: 15,
  },
  headingText: {
    fontSize: 28,
    color: '#000000',
    marginVertical: 20,
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
