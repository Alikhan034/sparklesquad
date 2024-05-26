import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import PageHeading from "../../Components/PageHeading";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Color from "../../utills/Color";
import Heading from "../../Components/Heading";

export default function BookingModal({ hideModal }) {
  const [timeList, setTimeList] = useState();
  const [selectedTime,setSelectedTime]=useState();
  const [note,setNote]=useState();
  useEffect(() => {
    getTime();
  }, []);
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({ time: i + ":00 AM" });
      timeList.push({ time: i + ":30 AM" });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({ time: i + ":00 PM" });
      timeList.push({ time: i + ":30 PM" });
    }
    setTimeList(timeList);
  };

  return (
    <ScrollView>
    <KeyboardAvoidingView style={{ padding: 20 }}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginBottom: 20,
        }}
        onPress={() => hideModal()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          Booking
        </Text>
      </TouchableOpacity>
      {/* Calender Picker */}
      <Heading text={"Select Date"}></Heading>
      <View style={styles.calenderContainer}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          width={340}
          minDate={Date.now()}
          todayBackgroundColor={Color.Black}
          todayTextStyle={{ color: Color.White }}
          selectedDayColor={Color.PRIMARY}
          selectedDayTextColor={Color.White}
        />
      </View>
      {/* Time Selected Section */}
      <View style={{ marginTop: 20 }}>
        <Heading text={"Select Time Slot"} />
        <FlatList
          data={timeList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={{ marginRight: 10 }} 
            onPress={()=>setSelectedTime(item.time)}>
              <Text style={[selectedTime==item.time? styles.selectedTime:styles.unSelectedTiem]}>{item.time}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Note Section */}
      <View style={{paddingTop:20}}>
        <Heading text={'Any Suggestion Note'} />
        <TextInput numberOfLines={4} multiline={true}
         placeholder="Note" style={styles.noteTextArea}
         onChange={(text)=>setNote(text)}/>
      </View>
      {/* confirmation button */}
      <TouchableOpacity  style={{marginTop:15}}>
        <Text style={styles.confirmBtn}>Confirm and Book</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  calenderContainer: {
    backgroundColor: Color.PRIMARY_LIGHT,
    padding: 20,
    borderRadius: 15,
  },
  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    backgroundColor:Color.PRIMARY,
    color: Color.White,
  },
  unSelectedTiem: {
    padding: 10,
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    color: Color.PRIMARY,
  },
  noteTextArea:{
  borderWidth:1,
  borderRadius:15,
  textAlignVertical:'top',
  padding:20,
  fontSize:16,
  fontFamily:'outfit',
  borderColor:Color.PRIMARY,
   
  },
  confirmBtn:{
    textAlign:"center",
    fontFamily:"outfit-medium",
    fontSize:17,
    backgroundColor:Color.PRIMARY,
    color:Color.White,
    padding:10,
    borderRadius:99,
    elevation:2,



  }
});
