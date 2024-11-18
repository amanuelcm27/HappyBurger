import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import images from "../constants/images";

const FormField = ({ label, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="mx-4 p-4 ">
      <Text className="text-xl font-primary">{label}</Text>
      <View className="flex-row w-full h-16 border-2 p-2 items-center ">
        <TextInput
          className="flex-1 text-black font-psemibold text-sm"
          secureTextEntry={(type === "password" && !showPassword)}
        />
        {type === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? images.eye : images.hide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
