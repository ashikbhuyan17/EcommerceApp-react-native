import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Tags = () => {
  const [selected, setSelected] = useState('Trending Now');
  const tags = ['Trending Now', 'womens', 'Fashion', 'Mens', 'all'];
  const tagsObject = [
    {id: 1, name: 'Trending Now'},
    {id: 2, name: 'Womens'},
    {id: 3, name: 'Fashion'},
    {id: 4, name: 'Mens'},
    {id: 5, name: 'All'},
  ];
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={tagsObject}
        keyExtractor={item => item.id.toString()} // Use id as key
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setSelected(item.name)}>
            <Text
              style={[
                styles.tagText,
                item.name === selected ? styles.isSelected : null,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  tagText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#DFDCDC',
    color: '#938F8F',
    fontWeight: '700',
  },
  isSelected: {
    backgroundColor: '#E96E6E',
    color: '#FFFFFF',
  },
  container: {
    marginVertical: 10,
  },
});
