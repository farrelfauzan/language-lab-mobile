import { Stack } from "expo-router";
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
      screenLayout={({ children }) => (
        <SafeAreaView className="flex-1" edges={["left", "right"]}>
          <ImageBackground
            source={require("../../assets/images/bg-login.jpg")}
            className="flex-1"
            resizeMode="cover"
          >
            <View className="absolute inset-0 bg-black opacity-50" />
            {children}
          </ImageBackground>
        </SafeAreaView>
      )}
    />
  );
}
