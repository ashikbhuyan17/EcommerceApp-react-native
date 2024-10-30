import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Onboarding from 'react-native-onboarding-swiper';

// Import Screens
import HomeScreen from './src/screen/HomeScreen';
import AccountScreen from './src/screen/AccountScreen';
import StepperScreen from './src/screen/StepperScreen';
import {StepperProvider} from './src/contexts/StepperContext';

// Import Icons
import {
  HomeIcon,
  AccountIcon,
  SettingsIcon,
  CartIcon,
} from './src/components/icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [isStepperCompleted, setIsStepperCompleted] = useState(false);

  useEffect(() => {
    // Ensure splash screen hides after app is fully loaded.
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  // Onboarding logic
  if (!isOnboardingCompleted) {
    return (
      <Onboarding
        onSkip={() => setIsOnboardingCompleted(true)}
        onDone={() => setIsOnboardingCompleted(true)}
        pages={[
          {
            backgroundColor: '#fff',
            image: <HomeIcon />,
            title: 'Welcome to the App',
            subtitle: 'This is the first step to explore the app.',
          },
          {
            backgroundColor: '#fdeb93',
            image: <AccountIcon />,
            title: 'Create an Account',
            subtitle: 'Manage your account easily.',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <CartIcon />,
            title: 'Shop with Us',
            subtitle: 'Explore products and shop with ease.',
          },
        ]}
      />
    );
  }

  // Stepper logic
  if (!isStepperCompleted) {
    return (
      <StepperProvider>
        <StepperScreen onComplete={() => setIsStepperCompleted(true)} />
      </StepperProvider>
    );
  }

  // Main app navigation after onboarding and stepper are completed
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
          component={HomeScreen} // Example: reuse HomeScreen for demonstration
          options={{tabBarIcon: SettingsIcon}}
        />
        <Tab.Screen
          name="Cart"
          component={AccountScreen} // Example: reuse AccountScreen for demonstration
          options={{tabBarIcon: CartIcon}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
