import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utills/GlobalApi";
import Heading from "../../Components/Heading";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSliders();
  }, []);
  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      console.log("resp", resp.sliders);
      setSlider(resp?.sliders);
    });
  };

  return (
    <View>
<Heading text={'Offer For You'}/>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderimage}
            ></Image>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  sliderimage: {
    width: 190,
    height: 150,
    borderRadius: 20,
    objectFit: "contain",
  },
});
