import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PageHeading from "../../Components/PageHeading";
import { useUser } from "@clerk/clerk-expo";
import Color from "../../utills/Color";
export default function ProfileScreen() {
  const { user } = useUser();
  const profileMenu = [
    {
      id: 1,
      name: "home",
      icon: "home",
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark-sharp",
    },
    {
      id: 3,
      name: "Contact-Us",
      icon: "mail",
    },
    {
      id: 3,
      name: "Logout",
      icon: "log-out",
    },
  ];
  return (
    <View style={{}}>
      <View
        style={{
          marginTop: 10,
          padding: 20,
          paddingTop: 30,
          backgroundColor: Color.PRIMARY,
        }}
      >
        <PageHeading title={"Profile"} />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: Color.PRIMARY,
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              fontSize: 26,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: Color.White,
            }}
          >
            {user?.fullName}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginTop: 18,
              fontFamily: "outfit-medium",
              color: Color.White,
            }}
          >
            {user?.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>
      <View style={{paddingTop:60}}>
      <FlatList
        data={profileMenu}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10, marginBottom:40,paddingHorizontal:80, }}>
            <Ionicons name={item.icon} size={35} color={Color.PRIMARY} />
            <Text style={{fontFamily:'outfit', fontSize:20,}}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
    </View>
  );
}
