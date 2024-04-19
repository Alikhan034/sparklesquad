import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function BusinessListByCategoryScreen() {
  const param = useRoute().params;
  const navigation=useNavigation();
  useEffect(() => {
    console.log("Category", param.category);
  }, []);
  return (
    <View style={{padding:20,paddingTop:40}}>
      <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,alignItems:"center"}}
      onPress={()=>navigation.goBack()}
      >
      <Ionicons name="arrow-back-outline" size={30} color="black" />
      <Text style={{fontSize:25,fontFamily:'outfit-medium'}}>{param?.category}</Text>
    </TouchableOpacity></View>
  );
}
