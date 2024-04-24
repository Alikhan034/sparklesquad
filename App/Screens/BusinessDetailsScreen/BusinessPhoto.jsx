import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

export default function BusinessPhoto({business}) {
  return (
    <View>
      <Heading text={'Photos'} />
      <FlatList
      data={business.image}
      renderItem={({item})=>(
        <Image source={{uri:item.url}} 
        style={{width:'100%',
        flex:1,borderRadius:15, margin:5,
        height:120,}}
        />


      )}
      
      />
    </View>
  )
}