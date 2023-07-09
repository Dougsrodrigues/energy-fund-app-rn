import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

import {
  useFonts,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_400Regular,
} from "@expo-google-fonts/sora";
import { Providers } from "@/modules/app/providers";
import { Routes } from "@/modules/app/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <Providers>
      <Routes />
      <StatusBar style="auto" />
    </Providers>
  );
}
