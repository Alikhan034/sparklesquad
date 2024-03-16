import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../utills/Color'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('./../../../assets/images/loginimage.jpg')}
      style={Styles.loginimg}
      />
    <View style={Styles.subContainer}>
        <Text style={{fontSize:26,color:Color.White,textAlign:'center'}}>"Step into a <Text style={{fontWeight:'bold'}}>home that sparkles.</Text>"</Text>
        <Text style={{fontSize:17,color:Color.White,textAlign:'center',marginTop:20}}>"Don't just dream of a clean home – login and make it a reality!"</Text>
    <TouchableOpacity style={Styles.button}
    onPress={onPress}>
        <Text style={{textAlign:'center',fontSize:15,color:Color.PRIMARY,}}>Let's get started</Text>
    </TouchableOpacity>
    </View >
    </View>
  
    
  )
}
const Styles=StyleSheet.create({
    loginimg:{
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:Color.PRIMARY,
        borderRadius:15,
        
    },
    subContainer:{
      width:'100%',
      backgroundColor:Color.PRIMARY,
      height:'70%',
      marginTop:-20,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      padding:20

      
      
    },
    button:{
        padding:15,
        backgroundColor:Color.White,
        borderRadius:99,
        marginTop:40,


    }
})