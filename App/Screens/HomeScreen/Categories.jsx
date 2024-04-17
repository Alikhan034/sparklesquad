import { View, Text, FlatList,Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utills/GlobalApi'
import Heading from '../../Components/Heading';
import Color from '../../utills/Color';

export default function Categories() {
  const [categories,setCategories]=useState([]);
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
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Image source={{uri:item?.icon?.url}}
            style={{width:30,height:30}}
            
            />
          </View>
          <Text style={{fontFamily:'outfit-medium',marginTop:5,}}>{item?.name}</Text>
        </View>


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