import { View, Text ,Image } from "react-native";
import React from "react";
import images from "../constants/images";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const MenuItem = () => {
  return (
    <View className="w-full h-[200px] my-2  rounded-xl shadow-xl pverflow-hidden shadow-black bg-gray-200">
      <Image
        className="w-full h-[120px]  rounded-t-xl "
        resizeMode="cover"
        source={images.b3}
      />
      <View className="flex-row p-2 items-center">
        <View>
          <Text className="text-xl font-mont-bold">Special Burger</Text>
          <Text className="font-mont-regular">350 birr</Text>
        </View>
        <View className="flex-row ml-auto">
          <FontAwesomeIcon icon={`fa-clock`} />
          <Text className="font-mont-regular px-2">15min</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuItem;