import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image source={require('../assets/apps.png')} style={styles.appIcon} />
      </View>
      <Image source={require('../assets/Ellipse2.png')} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appIconContainer: {
    backgroundColor: 'white',
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    height: 26,
    width: 26,
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  appDrawerIcon: {
    height: 30,
    width: 30,
  },
  appBackIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  profileImage: {
    height: 44,
    width: 44,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 28,
    // fontFamily: fonts.regular,
    color: '#000000',
  },
});
