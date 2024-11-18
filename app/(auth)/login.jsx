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
import { router, Link } from "expo-router";


const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView className=" bg-yellow-400 justify-center  h-full">
      <KeyboardAvoidingView>
        <ScrollView>
          <View className="h-full">
            <View className="items-center ">
              <Image source={images.logo} className="w-[220px] h-32" />
            </View>

            <TouchableOpacity className="mx-4 p-4  rounded-full bg-white flex-row items-center justify-center ">
              <Image source={images.google} className="w-8 h-8" />
              <Text className="text-lg mx-4 font-extrabold">
                Continue with Google
              </Text>
            </TouchableOpacity>
            <View>
            <FormField label={"Email"} type="email" />
            <FormField label={"Password"} type="password" />
              <SubmitButton
                text="Login"
                loading={loading}
                handlePress={() => setLoading(!loading)}
                textStyles="text-white text-2xl font-extrabold"
                otherStyles={`bg-black mx-4 rounded-full p-4`}
              />
            </View>
            <Text className="text-center m-4 text-xl font-primary">
              Don't have an account ?{" "}
              <Link href="/register" className="text-red-500 ">
                Register
              </Link>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
