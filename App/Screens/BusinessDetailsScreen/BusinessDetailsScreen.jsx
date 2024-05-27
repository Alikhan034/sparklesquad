import { View, Text, Image, StyleSheet, TouchableOpacity ,Modal, Linking} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Color from "../../utills/Color";
import Heading from "../../Components/Heading";
import BusinessPhoto from "./BusinessPhoto";
import BookingModal from "./BookingModal";

export default function () {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const [isReadMore, setIsReadMore] = useState(false);
  const [showModal,setShowModal]=useState(false);
    const navigation = useNavigation();
  useEffect(() => {}, []);

  const onMessageBtnClick=()=>{
    Linking.openURL('mailto:'+business?.email+"?subject= I am looking for your services&body=Hi there,");
  }
  return  business&&(
    <View>
      <ScrollView style={{ height: "92%" }}>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Image
          source={{ uri: business?.image[0]?.url }}
          style={{ width: "100%", height: 300 }}
        />
        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
            {business?.name}
          </Text>
          <View style={styles.subContainer}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
                color: Color.PRIMARY,
              }}
            >
              {business?.contactPerson} ⭐
            </Text>
            <Text
              style={{
                color: Color.PRIMARY,
                backgroundColor: Color.PRIMARY_LIGHT,
                padding: 5,
                borderRadius: 5,
                fontSize: 14,
              }}
            >
              {business?.category.name}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 17,
              fontFamily: "outfit-bold",
              color: Color.GREY,
            }}
          >
            <Ionicons name="location-sharp" size={25} color={Color.PRIMARY} />
            {business?.address}
          </Text>
          {/* Horizental line */}
          <View
            style={{
              borderWidth: 0.4,
              borderColor: Color.GREY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          {/* About me section */}
          <ScrollView>
            <View>
              <Heading text={"About me"} />
              <Text
                style={{
                  fontFamily: "outfit",
                  lineHeight: 28,
                  color: Color.GREY,
                  fontSize: 16,
                }}
                numberOfLines={isReadMore ? 20 : 5}
              >
                {business.about}
              </Text>
              <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
                <Text
                  style={{
                    color: Color.PRIMARY,
                    fontSize: 16,
                    fontFamily: "outfit",
                  }}
                >
                  {isReadMore ? "Read less" : " Read More"}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* Horizental line */}
          <View
            style={{
              borderWidth: 0.4,
              borderColor: Color.GREY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          <BusinessPhoto business={business} />
        </View>
      </ScrollView>
      <View style={{ display: "flex", flexDirection: "row",margin:5,gap:8, }}>
        <TouchableOpacity onPress={()=>onMessageBtnClick()} style={styles.msgbtn}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: Color.PRIMARY,
              fontSize: 18,
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingbtn} onPress={()=>setShowModal(true)}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: Color.White,
              fontSize: 18,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
      {/* Booking Screen Model */}
      <Modal
      animationType="slide"
      visible={showModal}>
        <BookingModal 
        businessId={business.id}
        hideModal={()=>setShowModal(false)}  />

      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  msgbtn: {
    padding: 15,
    backgroundColor: Color.White,
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
  bookingbtn: {
    padding: 15,
    backgroundColor: Color.PRIMARY,
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
});
