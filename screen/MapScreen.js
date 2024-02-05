import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";
import tailwind from "twrnc";

const MapScreen = () => {
  return (
    <View>
      <View style={tailwind`h-1/2`}>
        <Map />
      </View>
      <View style={tailwind`h-1/2`}>
        <Text>MapScreen</Text>
      </View>
    </View>
  );
};

export default MapScreen;
