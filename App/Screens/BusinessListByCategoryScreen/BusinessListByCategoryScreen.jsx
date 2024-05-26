import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import GlobalApi from "../../utills/GlobalApi";
import BusinessListItem from "./BusinessListItem";
import Color from "../../utills/Color";
import PageHeading from "../../Components/PageHeading";

export default function BusinessListByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    param && getBusinessByCategory();
  }, [param]);

  // get business list by category
  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category).then((resp) => {
      setBusinessList(resp.businessLists);
    });
  };
  return (
    <View style={{ padding: 20, paddingTop: 40 }}>
      <PageHeading title={param.category} />
      
      {businessList?.length>0?      <FlatList
        data={businessList}
        style={{marginTop:15}}
        renderItem={({ item, index }) => (
        <BusinessListItem  business={item} />
      )}
      />:
      <Text style={{fontFamily:'outfit-medium',
      color:Color.GREY, fontSize:20, textAlign:"center", marginTop:'20%'}}>No Business Found</Text>}
    </View>
  )
}
