import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();
export default function TabNavigations() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Booking' component={BookingScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />


    </Tab.Navigator>
    
  )
}