import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import images from "../constants/images";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


const FormField = ({ label, type , placeholder ,containerStyle , otherStyles , fieldIcon , }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${containerStyle}`}>
      {label && <Text className="text-xl font-mont-regular">{label}</Text>}
      <View className={`flex-row w-full h-16 border-2 ${otherStyles} p-2 items-center`}>
        <TextInput
          className="flex-1 text-black font-psemibold text-sm"
          placeholder={placeholder}
          placeholderTextColor={'black'}
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
        {fieldIcon && (
          <TouchableOpacity className="p-2">
            <FontAwesomeIcon icon={fieldIcon} size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
