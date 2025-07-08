import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import BottomTabs from './BottomNavigation'; // <-- this is your tab navigator
import FeaturedDetails from '../screens/FeaturedDetails';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      
      {/* This is where your tab bar app starts */}
      <Stack.Screen name="MainApp" component={BottomTabs} />
      <Stack.Screen name="Details" component={FeaturedDetails} />
    </Stack.Navigator>
  );
}
