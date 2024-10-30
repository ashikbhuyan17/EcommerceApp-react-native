import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Icon components
export const HomeIcon = ({color, size}) => (
  <Entypo name="home" size={size} color={color} />
);

export const AccountIcon = ({color, size}) => (
  <MaterialCommunityIcons name="account" size={size} color={color} />
);

export const SettingsIcon = ({color, size}) => (
  <AntDesign name="setting" size={size} color={color} />
);

export const CartIcon = ({color, size}) => (
  <AntDesign name="shoppingcart" size={size} color={color} />
);

export const HeartoIcon = ({color, size}) => (
  <AntDesign name="hearto" size={20} color="#E55B5B" />
);
export const HeartIcon = ({color, size}) => (
  <AntDesign name="heart" size={20} color="#E55B5B" />
);
