import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import images from "../constants/images";

const PopularItem = () => {
  return (
      <TouchableOpacity className="h-[320px] w-[200px] mr-2 ">
        <ImageBackground
          source={images.b1}
          className="rounded-2xl overflow-hidden w-full h-full  "
        />
      </TouchableOpacity>
  );
};

export default PopularItem;
