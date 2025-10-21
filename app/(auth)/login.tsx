import PrimaryButton from "@/components/ui/PrimaryButton";
import PrimaryTextInput from "@/components/ui/PrimaryTextInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-transparent">
      <Image
        source={require("../../assets/images/logo/akademos-logo-white.png")}
        className="w-[224px] h-[45.32px] my-20"
        resizeMode="contain"
      />
      <View className="items-center justify-center px-20 pb-8">
        <Text className="text-[20px] font-bold text-white mb-2.5 text-center">
          Smart AI-Powered Learning
        </Text>
        <Text className="text-[11.03px] text-white/80 text-center">
          Unlock your global potential through adaptive, intelligent language
          acquisition.
        </Text>
      </View>
      <View className="h-1/2 bg-neutral-50 w-[90%] py-12 px-6">
        <View className="flex-col justify-center items-center gap-2">
          <Text className="text-neutral-800 text-2xl font-semibold">
            Welcome, Back!
          </Text>
          <Text className="text-neutral-500 text-[18px] text-center">
            Welcome back, please enter your details.
          </Text>
        </View>
        <View className="mt-4">
          <PrimaryTextInput
            label="Email Address"
            value={login.email}
            onChangeText={(text) => setLogin({ ...login, email: text })}
            placeholder="Enter your email"
            keyboardType="email-address"
            maxLength={100}
            errorText=""
            onPressSufix={() => {}}
          />
          <PrimaryTextInput
            label="Password"
            value={login.password}
            onChangeText={(text) => setLogin({ ...login, password: text })}
            placeholder="Enter your password"
            isPassword
            maxLength={50}
            errorText=""
            onPressSufix={() => {}}
          />
        </View>
        <View className="mt-2 items-center">
          <PrimaryButton
            title="Login"
            onPress={() => {
              router.replace("/(tabs)");
            }}
            className="w-full"
            textClassName="text-lg"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
