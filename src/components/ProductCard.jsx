import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {HeartIcon, HeartoIcon} from './icons';

const ProductCard = ({isLinked, setIsLinked}) => {
  // const [isLinked, setIsLinked] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/girl.png')} style={styles.coverImage} />

      <View style={styles.content}>
        <Text style={styles.title}>Jacket Jeans</Text>
        <Text style={styles.price}>$45.9</Text>
      </View>

      <View style={styles.likeContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsLinked(!isLinked);
          }}>
          {isLinked ? <HeartIcon /> : <HeartoIcon />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
    position: 'relative',
  },
  likeContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // for Android
  },
  coverImage: {
    width: '95%',
    height: 256,
    borderRadius: 20,
    marginVertical: 10,
  },
  content: {
    paddingHorizontal: 10,
    // backgroundColor: '#F5F5F5',
    // borderRadius: 20,
    // marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
    // marginVertical: 5,
    // textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: '#9C9C9C',
    fontWeight: '600',
    // textAlign: 'center',
  },
});
