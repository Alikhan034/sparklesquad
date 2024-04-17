import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import GlobalApi from "../../utills/GlobalApi";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function BusinessList() {

  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, [])

// get business list from api
  const getBusinessList = () => {
    GlobalApi.getBusinessList().then(resp => {
      console.log(resp);
      setBusinessList(resp.businessLists)
    });
  };
  return (
    <View style={{ marginTop: 20 }}>
      <Heading text={"Leatest Business"} isViewAll={true} />
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => 
        (
        <View style={{marginRight:10,}}>
          <BusinessListItemSmall business={item}/>
        </View>)}
      />
    </View>
  );
}
