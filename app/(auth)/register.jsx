import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import SubmitButton from "../../components/SubmitButton";
import { Link, router } from "expo-router";

const register = () => {
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView className="h-full justify-center  bg-yellow-400">
      <KeyboardAvoidingView>
        <ScrollView>
          <View className="items-center  ">
            <Image source={images.logo} className="w-[220px] h-32" />
          </View>

          <TouchableOpacity className="mx-4 p-4 rounded-full bg-white flex-row items-center justify-center">
            <Image source={images.google} className="w-8 h-8" />
            <Text className="text-lg mx-4 font-extrabold">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <View className=" ">
            <FormField label={"Email"} type="email" />
            <FormField label={"Password"} type="password" />
            <FormField label={"Confirm password"} type="password" />

            <SubmitButton
              text="Register"
              loading={loading}
              handlePress={() => setLoading(!loading)}
              textStyles="text-white text-2xl font-extrabold"
              otherStyles="bg-black mx-4 rounded-full p-4 mt-4"
            />
          </View>

          <Text className="text-center m-4 text-xl font-primary">
            Already have an account?{" "}
            <Link href="/login" className="text-red-500">
              Login
            </Link>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;
