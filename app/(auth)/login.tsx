import PrimaryButton from "@/components/ui/PrimaryButton";
import PrimaryTextInput from "@/components/ui/PrimaryTextInput";
import { Text } from "@/components/ui/Text";
import { setAuthState } from "@/libs/reducers/auth-slice";
import { saveAccessToken } from "@/libs/secure-storage";
import { useLogin } from "@/query/auth";
import { LoginSchema } from "@/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Dimensions, Image, ScrollView, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import z from "zod";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  // Responsive calculations
  const isSmallScreen = SCREEN_HEIGHT < 700;
  const isMediumScreen = SCREEN_HEIGHT >= 700 && SCREEN_HEIGHT < 900;

  const getResponsiveValue = (small: number, medium: number, large: number) => {
    if (isSmallScreen) return small;
    if (isMediumScreen) return medium;
    return large;
  };

  const logoMarginVertical = getResponsiveValue(40, 60, 80);
  const logoWidth = getResponsiveValue(180, 224, 260);
  const logoHeight = getResponsiveValue(36, 45, 52);
  const horizontalPadding = getResponsiveValue(16, 20, 24);

  const { mutateAsync: login } = useLogin();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  async function handleLogin(data: z.infer<typeof LoginSchema>) {
    try {
      const response = await login({
        emailOrUsername: data.emailOrUsername,
        password: data.password,
      });

      if (response.user.role.name === "student") {
        await saveAccessToken(response.token);
        dispatch(
          setAuthState({
            isAuthenticated: true,
            userId: response.user.id,
            user: response.user,
          })
        );
        router.replace("/(main)/home");
      } else {
        ToastAndroid.show(
          `${response.user.role.name.charAt(0).toUpperCase() + response.user.role.name.slice(1)}  portal still in progress, please use student account to login.`,
          ToastAndroid.LONG
        );
      }
    } catch (error: any) {
      console.error("Login failed:", error);
    }
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-transparent">
      <ScrollView
        className="w-full flex-1 bg-transparent"
        contentContainerStyle={{ flexGrow: 1, minHeight: SCREEN_HEIGHT }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center justify-center">
          <Image
            source={require("../../assets/images/logo/akademos-logo-white.png")}
            style={{
              width: logoWidth,
              height: logoHeight,
              marginVertical: logoMarginVertical,
            }}
            resizeMode="contain"
          />
        </View>

        <View
          className="items-center justify-center pb-8"
          style={{ paddingHorizontal: horizontalPadding }}
        >
          <Text
            className="font-bold text-white mb-2.5 text-center"
            style={{ fontSize: getResponsiveValue(18, 20, 22) }}
          >
            Smart AI-Powered Learning
          </Text>
          <Text
            className="text-white/80 text-center"
            style={{ fontSize: getResponsiveValue(10, 11, 12) }}
          >
            Unlock your global potential through adaptive, intelligent language
            acquisition.
          </Text>
        </View>

        <View className="items-center justify-center">
          <View className="bg-neutral-50 rounded-xl p-6 mx-4 min-h-[360px] max-w-sm w-full">
            <View className="flex-col justify-center items-center gap-2">
              <Text className="text-neutral-800 font-semibold text-xl">
                Welcome, Back!
              </Text>
              <Text className="text-neutral-500 text-center text-sm">
                Welcome back, please enter your details.
              </Text>
            </View>

            <View className="mt-5">
              <View className="mb-4">
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <PrimaryTextInput
                      label="Email or Username"
                      value={value}
                      onChangeText={(text) => {
                          onChange(text);
                      }}
                      placeholder="Enter your email or username"
                      maxLength={50}
                      errorText=""
                      onPressSufix={() => {}}
                    />
                  )}
                  name="emailOrUsername"
                />
                {errors.emailOrUsername && (
                  <Text className="text-red-500 mt-1">
                    {errors.emailOrUsername.message}
                  </Text>
                )}
              </View>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <PrimaryTextInput
                    label="Password"
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter your password"
                    isPassword
                    maxLength={50}
                    errorText=""
                    onPressSufix={() => {}}
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text className="text-red-500 mt-1">
                  {errors.password.message}
                </Text>
              )}
            </View>

            <View className="items-center mt-5">
              <PrimaryButton
                title="Login"
                onPress={handleSubmit(handleLogin)}
                className="w-full"
                textClassName="text-lg"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
