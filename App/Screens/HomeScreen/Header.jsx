import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Color from "../../utills/Color";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text style={{ color: Color.White, fontFamily: "outfit" }}>
                Welcome
              </Text>
              <Text
                style={{
                  color: Color.White,
                  fontSize: 20,
                  fontFamily: "outfit-medium",
                }}
              >
                {user.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>
        {/* Search Bar Section */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search" style={styles.textInput} />
          <FontAwesome
            style={styles.saerchbtn}
            name="search"
            size={24}
            color={Color.PRIMARY}
          />
        </View>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingtop: 40,
    backgroundColor: Color.PRIMARY,
    
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  saerchbtn: {
    backgroundColor: Color.White,
    padding: 10,
    borderRadius: 8,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Color.White,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
  },
});
