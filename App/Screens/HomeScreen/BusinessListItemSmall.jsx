import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../../utills/Color";
import { useNavigation } from "@react-navigation/native";



export default function BusinessListItemSmall({ business }) {
    const navigation=useNavigation();
    return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push('business-detail',{business:business})}>
        <Image source={{ uri: business?.image[0]?.url }} style={styles.image} />

        <View style={styles.infoContainer}>
        <Text style={{ fontSize: 17, fontFamily: "outfit-medium" }}>
            {business?.name}
        </Text>
        <Text style={{ fontSize: 13, color: Color.GREY, fontFamily: "outfit" ,}}>
            {business?.contactPerson}
        </Text>
        <Text
            style={{
            fontSize: 10,
            fontFamily: "outfit",
            padding: 3,
            color: Color.PRIMARY,
            backgroundColor: Color.PRIMARY_LIGHT,
            borderRadius:3,
            alignSelf:'flex-start',
            paddingHorizontal:7
            }}
        >
            {business?.category.name}
        </Text>
        </View>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
    padding: 10,
    backgroundColor: Color.White,
    borderRadius: 10,
    },
    infoContainer:{
    padding:7,
    display:"flex",
    gap:3
    },
    image: {
    width: 160,
    height: 100,
    borderRadius: 10,
    },
});
