import { View, Text,FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeading from "../../Components/PageHeading";
import GlobalApi from "../../utills/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItem from "../BusinessListByCategoryScreen/BusinessListItem";

export default function BookingScreen() {

const {user}=useUser();
const [bookingList,setBookingList]=useState([]);
const [loading,setLoading]=useState(false);

useEffect(()=>{
 user&&getUserBookings();},[user]
)
  //get user booking
  const getUserBookings=()=>{
    setLoading(true);
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
      setBookingList(resp.bookings);
      setLoading(false);

    })

  }
  return (
    <View style={{padding:20}}>
      <PageHeading title={'My Bookings'}/>
      <View>
        <FlatList 
        data={bookingList}
        onRefresh={()=>getUserBookings()}
        refreshing={loading}
        renderItem={({item,index})=>(
         <BusinessListItem 
         business={item?.businessList}
         status={item?.bookingStatus}
         date={item?.date}
         s
         />
        )}
        />
      </View>
    </View>
  );
}
