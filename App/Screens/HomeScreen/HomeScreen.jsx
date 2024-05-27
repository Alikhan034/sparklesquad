import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessList from "./BusinessList";

export default function HomeScreen() {
  return (
    <View style={{marginTop:10}}>
      <ScrollView style={{height:"100%"}}>
      {/* Header */}
      <Header />
      <View style={{ padding: 20 }}>
        {/* Slider */}
        <Slider />
        {/* Categories */}
        <Categories/>
        {/* Business List */}
        <BusinessList/>
      </View></ScrollView>
    </View>
  );
}
