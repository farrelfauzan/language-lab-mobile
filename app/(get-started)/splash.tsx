import { Text } from "@/components/ui/Text";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1" edges={['left', 'right']}>
      <LinearGradient
        colors={['#1e3c72', '#2193b0', '#00d4aa']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View className="items-center justify-center p-20">
            <Image 
                source={require("../../assets/images/logo/akademos-logo-white.png")}
                className="w-[224px] h-[45.32px] mb-10"
                resizeMode="contain"
            />
          <Text className="text-[20px] font-bold text-white mb-2.5 text-center">Smart AI-Powered Learning</Text>
          <Text className="text-[11.03px] text-white/80 text-center">Unlock your global potential through adaptive, intelligent language acquisition.</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
