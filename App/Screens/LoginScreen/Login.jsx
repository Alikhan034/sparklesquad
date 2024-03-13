import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import Color from '../../utills/Color'

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('./../../../assets/images/loginimage.jpg')}
      style={Styles.loginimg}
      />

    </View>
  )
}
const Styles=StyleSheet.create({
    loginimg:{
        width:230,
        height:450,
        marginTop:70,
        borderWidth:5,
        borderColor:Color.Green,



    }
})