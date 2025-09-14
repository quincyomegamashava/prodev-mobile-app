// app/_layout.tsx
import { Stack } from "expo-router";
import { View } from "react-native";
import "../styles/global.css";

export default function RootLayout() {
  return (
    <View>
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="passwordReset" />
    </Stack>
    </View>
  );
}