import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#facc15" style="light" />
    </>
  );
}

export default AuthLayout;
