import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, Image } from "react-native";
import images from "../constants/images";
import { StatusBar } from "react-native-web";
import { router } from "expo-router";

const Onboarding = () => {
  return (
    <View className="h-full bg-[#facc15]">
      <View className="items-center my-4 relative ">
        <Image source={images.logo} className="w-48 h-48" />
        <View className="absolute right-0 top-0">
          <Image source={images.burger} className="rotate-45 w-24 h-24" />
        </View>
        <View className="absolute left-0 top-0">
          <Image source={images.burger} className="-rotate-45 w-24 h-24" />
        </View>
      </View>
      <View className="flex-1 items-center relative ">
        <Image source={images.front} className="" />
        <View className="absolute -right-12 top-0">
          <Image source={images.pizza} className="w-36 h-36" />
        </View>
        <View className="absolute -left-12 top-0">
          <Image source={images.burger} className="" />
        </View>
        <View className="absolute -left-10  bottom-0">
          <Image source={images.pizza} className="w-36 h-36" />
        </View>
        <View className="absolute -right-10  bottom-0">
          <Image source={images.burger} className="w-36 h-36" />
        </View>
      </View>
      <View className="my-4 ">
        <Text className="text-6xl font-primary  text-center ">
          Grab your food now
        </Text>
        <TouchableOpacity onPress={()=>router.push('/login')} className="bg-black p-4 rounded-full mx-4 ">
          <Text className="text-white text-center font-extrabold text-2xl">
            Get Started
          </Text>
        </TouchableOpacity>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
