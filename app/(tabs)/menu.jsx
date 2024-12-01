import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import MenuItem from "../../components/MenuItem";
import PopularItem from "../../components/PopularItem";
import { router } from "expo-router";

const menu = () => {

  // Mock data for menu items
  const menuItems = Array.from({ length: 10 }, (_, index) => ({
    id: `${index}`,
  }));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View className=" my-6 px-4 flex-row w-full items-center justify-between">
              <Text className="w-1/2 text-sm font-mont-extrabold ">
                Choose from variety of burgers and pizzas
              </Text>
              <Image
                source={images.menu}
                className="w-12 h-12"
                resizeMode="contain"
              />
            </View>
            <View className=''>
              <FormField
                containerStyle={`mx-2`}
                otherStyles={`rounded-full `}
                fieldIcon={"fa-magnifying-glass"}
                placeholder={`search in menu ...`}
              />
            </View>
            
          </>
        }
        renderItem={() => (
          <View className='flex-col mx-4'>
            <MenuItem />
          </View>
        )}
       
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
};

export default menu;
