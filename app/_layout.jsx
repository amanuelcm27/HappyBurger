import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faBasketShopping,
  faBell,
  faHouse,
  faUser,
  faUtensils,
  faMagnifyingGlass,
  faClock,
  faAnglesRight

} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faHouse,
  faBasketShopping,
  faBell,
  faUser,
  faUtensils,
  faBagShopping,
  faMagnifyingGlass,
  faClock,
  faAnglesRight
);

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    Jersey25: require("../assets/fonts/Jersey25.ttf"),
    MontserratBold: require("../assets/fonts/MontserratBold.ttf"),
    MontserratLight: require("../assets/fonts/MontserratLight.ttf"),
    MontserratExtraBold: require("../assets/fonts/MontserratExtraBold.ttf"),
    MontserratRegular: require("../assets/fonts/MontserratRegular.ttf"),

  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  if (!fontsLoaded) {
    return null; // Prevent rendering the app while the font is loading
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#facc15" style="light" />
    </>
  );
};

export default RootLayout;
