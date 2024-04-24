import { View, Text ,Image ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Color from '../../utills/Color'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItem({business}) {
    const navigation=useNavigation();
  return (
   <TouchableOpacity style={styles.container} onPress={()=>navigation.push('business-detail',{business:business})}>
    <Image source={{uri:business?.image[0]?.url}} style={styles.image} />
    <View style={styles.subcontainer}>
        <Text style={{fontFamily:'outfit',color:Color.GREY,fontSize:15,}}>{business.contactPerson}</Text>
        <Text style={{fontFamily:'outfit-bold',fontSize:19,}}>{business.name}</Text>
        <Text style={{fontFamily:'outfit',color:Color.GREY,fontSize:16,}}>
        <Ionicons name="location-sharp" size={20} color={Color.PRIMARY} />
            {business.address}</Text>

    </View>
   
    
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Color.White,
        borderRadius:15,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10,


    },
    subcontainer:{
        display:'flex',
        gap:7

    },
image:{
    width:100,
    height:100,
    borderRadius:15,


},

})