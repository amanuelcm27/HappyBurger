import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import MenuItem from "../../components/MenuItem";
import PopularItem from "../../components/PopularItem";
import { router } from "expo-router";

const home = () => {
  // Mock data for popular items
  const popularItems = Array.from({ length: 5 }, (_, index) => ({
    id: `${index}`,
  }));

  // Mock data for menu items
  const menuItems = Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
  }));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View className="px-4 flex-row w-full items-center justify-between">
              <Text className="w-1/2 text-2xl font-mont-extrabold capitalize">
                Welcome to Happy Burger
              </Text>
              <Image
                source={images.logo}
                className="w-32 h-32"
                resizeMode="contain"
              />
            </View>
            <View>
              <FormField
                containerStyle={`mx-2`}
                otherStyles={`rounded-full m-0`}
                fieldIcon={"fa-magnifying-glass"}
                placeholder={`search for food ...`}
              />
            </View>
            <View className="h-48 bg-gray-100 m-4 rounded-lg shadow-xl shadow-black p-2">
              <Text className="font-mont-bold text-2xl text-center">
                Our Foods
              </Text>
              <View className="flex-row justify-center">
                <View className="flex-col items-center justify-center m-4">
                  <Image
                    source={images.burger}
                    className="w-12 h-12 rounded-full bg-pink-200 m-2 p-8"
                  />
                  <Text className="text-lg">Burgers</Text>
                </View>
                <View className="flex-col items-center justify-center m-4">
                  <Image
                    source={images.pizza}
                    className="w-12 h-12 rounded-full bg-pink-200 m-2 p-8"
                  />
                  <Text className="text-lg">Pizza's</Text>
                </View>
              </View>
            </View>
            <View className="m-4">
              <Text className="text-lg font-mont-bold">Popular Foods</Text>
              <FlatList
                data={popularItems}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={() => <PopularItem />}
                contentContainerStyle={{ paddingHorizontal: 8 }}
              />
            </View>
          </>
        }
        renderItem={() => (
          <View className='flex-col mx-4'>
            <MenuItem />
          </View>
        )}
        ListFooterComponent={
          <View className="h-[100px] items-center p-4">
            <TouchableOpacity onPress={()=>router.push('/menu')} className="flex-row items-center">
              <Text className="text-xl px-2">Look for more</Text>
              <FontAwesomeIcon icon={"fa-angles-right"} />
            </TouchableOpacity>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
};

export default home;
