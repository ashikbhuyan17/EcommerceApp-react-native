import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from './src/utils/colors';

// Import Screens
import HomeScreen from './src/screen/HomeScreen';

// Import Icons from the centralized file
import {
  HomeIcon,
  AccountIcon,
  SettingsIcon,
  CartIcon,
} from './src/components/icons';
import AccountScreen from './src/screen/AccountScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E96E6E',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarIcon: HomeIcon}}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{tabBarIcon: AccountIcon}}
        />
        <Tab.Screen
          name="Settings"
          component={HomeScreen} // Reused HomeScreen for demonstration
          options={{tabBarIcon: SettingsIcon}}
        />
        <Tab.Screen
          name="Cart"
          component={AccountScreen} // Reused AccountScreen for demonstration
          options={{tabBarIcon: CartIcon}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
