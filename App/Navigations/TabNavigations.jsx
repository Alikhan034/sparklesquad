import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Color from '../utills/Color';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigations() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,
    tabBarActiveTintColor:Color.PRIMARY
    }}>
        <Tab.Screen name='home' component={HomeScreen}
        options={{tabBarLabel:({Color})=>(
            <Text style={{color:Color,fontSize:12,marginTop:-7}}>Home</Text>
        ),tabBarIcon:({color,size})=>(<Feather name="home" size={size} color={color} />)
    
    }}
        />
        <Tab.Screen name='booking' component={BookingScreen}   options={{tabBarLabel:({Color})=>(
            <Text style={{color:Color,fontSize:12,marginTop:-7}}>Booking</Text>
        ),tabBarIcon:({color,size})=>(<FontAwesome name="bookmark-o" size={size} color={color} />)
    
    }}/>
        <Tab.Screen name='profile' component={ProfileScreen}  
         options={{tabBarLabel:({Color})=>(
            <Text style={{color:Color,fontSize:12,marginTop:-7}}>Profile</Text>)
        ,tabBarIcon:({color,size})=>(<FontAwesome name="user-circle" size={size} color={color} />)
    
    }}/>


    </Tab.Navigator>
    
  )
}