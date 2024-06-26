import { View, Text, FlatList,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utills/GlobalApi'
import Heading from '../../Components/Heading';
import Color from '../../utills/Color';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
  const [categories,setCategories]=useState([]);
  const navigation=useNavigation()
  useEffect(()=>{getCaegories();},[])
  // get categories list
  const getCaegories=()=>{
    GlobalApi.getCategories().then(resp=>{
      setCategories(resp?.categories);
    })
  }
  return (
    <View style={{marginTop:10}}>

      <Heading text={'Categories'} isViewAll={true}/>
      <FlatList 
      data={categories}
      numColumns={4}
      renderItem={({item,index})=>index<=3&&(
        <TouchableOpacity style={styles.container}
        onPress={()=>navigation.push('business-list',{category:item.name})}>
          <View style={styles.iconContainer}>
            <Image source={{uri:item?.icon?.url}}
            style={{width:60,height:60, borderRadius:10}}
            
            />
          </View>
          <Text style={{fontFamily:'outfit-medium',marginTop:5,}}>{item?.name}</Text>
        </TouchableOpacity>


      )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'

  },
iconContainer:{
  backgroundColor:Color.LIGHT_GREY,
  padding:17,
  borderRadius:99,


},

})