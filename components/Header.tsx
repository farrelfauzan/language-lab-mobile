import { Text } from "@/components/ui/Text";
import { useGetClasses } from "@/query/class";
import { RootState } from "@/store/store";
import { Class } from "@/types/class";
import { Picker } from "@react-native-picker/picker";
import { router, usePathname } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function Header({ children }: { children: React.ReactNode }) {
  const user = useSelector((state: RootState) => state.auth.user);
  const scrollY = useRef(new Animated.Value(0)).current;
  const { height: SCREEN_HEIGHT } = Dimensions.get("window");

  // Responsive dimensions
  const HEADER_HEIGHT = SCREEN_HEIGHT * 0.32; // 32% of screen height
  const isSmallScreen = SCREEN_HEIGHT < 700;
  const isMediumScreen = SCREEN_HEIGHT >= 700 && SCREEN_HEIGHT < 900;

  const getResponsiveValue = (small: number, medium: number, large: number) => {
    if (isSmallScreen) return small;
    if (isMediumScreen) return medium;
    return large;
  };

  const headerPaddingTop = getResponsiveValue(8, 10, 12);
  const headerPaddingHorizontal = getResponsiveValue(16, 20, 24);
  const nameTextSize = getResponsiveValue(28, 32, 36);
  const welcomeTextSize = getResponsiveValue(14, 16, 18);
  const subtitleTextSize = getResponsiveValue(12, 14, 16);
  const pickerHeight = getResponsiveValue(36, 40, 44);

  const pathName = usePathname();

  const {
    data: classes,
  } = useGetClasses({
    userId: user?.id || undefined,
  });

  const [selectedClass, setSelectedClass] = useState<number>(
    classes?.data[0]?.id || 0
  );

  useEffect(() => {
    if (classes && classes.data.length > 0) {
      setSelectedClass(classes.data[0].id);
      router.setParams({ classId: classes.data[0].id.toString() });
    }
  }, [classes]);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: pathName === "/home" ? HEADER_HEIGHT : HEADER_HEIGHT / 1.3,
          zIndex: 1,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange:
                  pathName === "/home"
                    ? [0, HEADER_HEIGHT]
                    : [0, HEADER_HEIGHT / 1.4],
                outputRange:
                  pathName === "/home"
                    ? [0, -HEADER_HEIGHT / 2]
                    : [0, -(HEADER_HEIGHT / 1.4) / 2],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <ImageBackground
          source={require("../assets/images/bg-layer.png")}
          className="h-full w-full"
          resizeMode="cover"
        >
          <View className="h-full w-full bg-black/20" />
        </ImageBackground>
      </Animated.View>

      {/* Fixed Header Content */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: pathName === "/home" ? 2 : 1,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange:
                  pathName === "/home"
                    ? [0, HEADER_HEIGHT]
                    : [0, HEADER_HEIGHT / 1.4],
                outputRange:
                  pathName === "/home"
                    ? [0, -HEADER_HEIGHT / 4]
                    : [0, -(HEADER_HEIGHT / 1.4) / 4],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <SafeAreaView
          style={{
            paddingTop: headerPaddingTop,
            paddingHorizontal: headerPaddingHorizontal,
          }}
        >
          {pathName === "/home" && (
            <View style={{ gap: getResponsiveValue(8, 10, 12) }}>
              <View style={{ gap: getResponsiveValue(4, 6, 8) }}>
                {/* Welcome Back text - fades out when scrolling */}
                <Animated.View
                  style={{
                    opacity: scrollY.interpolate({
                      inputRange: [0, 50, 100],
                      outputRange: [1, 0.5, 0],
                      extrapolate: "clamp",
                    }),
                  }}
                >
                  <Text
                    className="text-white font-normal"
                    style={{ fontSize: welcomeTextSize }}
                  >
                    Welcome Back,
                  </Text>
                </Animated.View>

                {/* Sarah Chen name - stays visible */}
                <Animated.View
                  style={{
                    opacity: scrollY.interpolate({
                      inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
                      outputRange: [1, 0.9, 1],
                      extrapolate: "clamp",
                    }),
                  }}
                >
                  <Text
                    className="font-bold text-white tracking-wider"
                    style={{ fontSize: nameTextSize }}
                  >
                    {user?.profile.name}
                  </Text>
                </Animated.View>
              </View>

              {/* Subtitle - fades out when scrolling */}
              <Animated.View
                style={{
                  opacity: scrollY.interpolate({
                    inputRange: [0, 50, 100],
                    outputRange: [1, 0.5, 0],
                    extrapolate: "clamp",
                  }),
                }}
              >
                <Text
                  className="font-normal text-[#DBEAFE]"
                  style={{
                    fontSize: subtitleTextSize,
                    marginTop: getResponsiveValue(6, 8, 10),
                  }}
                >
                  B2 - Upper-Intermediate English • Top Speaker
                </Text>
              </Animated.View>

              {/* Picker - stays visible at original size */}
              <Animated.View
                style={{
                  opacity: scrollY.interpolate({
                    inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
                    outputRange: [1, 0.9, 0.8],
                    extrapolate: "clamp",
                  }),
                  transform: [
                    {
                      translateY: scrollY.interpolate({
                        inputRange: [0, 100, HEADER_HEIGHT],
                        outputRange: [
                          0,
                          getResponsiveValue(-8, -10, -12),
                          getResponsiveValue(-40, -50, -60),
                        ],
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#e5e5e5",
                    borderRadius: getResponsiveValue(6, 8, 10),
                    paddingVertical: 0,
                    height: pickerHeight,
                    backgroundColor: "#ffffff",
                    marginTop: getResponsiveValue(8, 12, 16),
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Picker
                      selectedValue={selectedClass}
                      onValueChange={(itemValue) => {
                        setSelectedClass(itemValue);
                        router.setParams({ classId: itemValue.toString() });
                      }}
                      dropdownIconColor="#898989"
                      dropdownIconRippleColor="#e5e5e5"
                      style={{
                        color: "#000000",
                        width: "100%",
                        fontSize: getResponsiveValue(14, 16, 18),
                      }}
                    >
                      {classes?.data.map((cls: Class) => (
                        <Picker.Item
                          key={cls.id}
                          label={cls.name}
                          value={cls.id}
                        />
                      ))}
                    </Picker>
                  </View>
                </View>
              </Animated.View>
            </View>
          )}
          {pathName === "/calendar" && (
            <View
              style={{ gap: getResponsiveValue(8, 10, 12) }}
              className="pt-8 flex-row justify-between items-center"
            >
              <View style={{ gap: getResponsiveValue(4, 6, 8) }}>
                <Text
                  className="font-bold text-white tracking-wider"
                  style={{ fontSize: nameTextSize }}
                >
                  Calendar
                </Text>
                <Text
                  className="text-white"
                  style={{
                    fontSize: subtitleTextSize,
                  }}
                >
                  Manage your study schedule with ease
                </Text>
              </View>
              <View className="bg-white rounded-xl px-[11px] py-[8px]">
                <Image
                  source={require("../assets/images/icons/schedule-header.png")}
                  className="w-6 h-6"
                />
              </View>
            </View>
          )}
          {pathName === "/completion" && (
            <View
              style={{ gap: getResponsiveValue(8, 10, 12) }}
              className="pt-8 flex-row justify-between items-center"
            >
              <View style={{ gap: getResponsiveValue(4, 6, 8) }}>
                <Text
                  className="font-bold text-white tracking-wider"
                  style={{ fontSize: nameTextSize }}
                >
                  Completion
                </Text>
                <Text
                  className="text-white"
                  style={{
                    fontSize: subtitleTextSize,
                  }}
                >
                  Track your class participation
                </Text>
              </View>
            </View>
          )}
        </SafeAreaView>
      </Animated.View>

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={{
          paddingTop:
            pathName === "/home"
              ? HEADER_HEIGHT - getResponsiveValue(10, 20, 40)
              : HEADER_HEIGHT / 1.5,
          paddingBottom: 60,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View
          className={`bg-white`}
          style={{
            minHeight: SCREEN_HEIGHT + 300,
            paddingHorizontal: getResponsiveValue(16, 20, 24),
          }}
        >
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
