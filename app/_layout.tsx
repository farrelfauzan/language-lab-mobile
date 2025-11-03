import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { TanstackProvider } from "@/provider/tanstack-provider";
import { persistor, store } from "@/store/store";
import { ActivityIndicator, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = Font.useFonts({
    Geist: require("../assets/fonts/Geist-Regular.ttf"),
    "Geist-Variable": require("../assets/fonts/Geist-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator color="#fff" />
      </View>
    );
  }

  return (
    <TanstackProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack screenOptions={{ headerShown: false }} />
            <StatusBar style="light" />
            <PortalHost />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </TanstackProvider>
  );
}
