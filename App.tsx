import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { horizontalScale } from "@/modules/app/utils/functions";
import {
  useFonts,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_400Regular,
} from "@expo-google-fonts/sora";
import { Providers } from "@/modules/app/providers";
import { styled } from "styled-components/native";

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
      <TextS>Open up App.js to start working on your app!</TextS>
      <StatusBar style="auto" />
    </Providers>
  );
}

const TextS = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular400};
`;
