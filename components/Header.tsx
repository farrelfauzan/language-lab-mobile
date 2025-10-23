import { Text } from "@/components/ui/Text";
import { Picker } from "@react-native-picker/picker";
import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header({ children }: { children: React.ReactNode }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
    Dimensions.get("window");

  // Responsive dimensions
  const HEADER_HEIGHT = SCREEN_HEIGHT * 0.32; // 32% of screen height
  const isSmallScreen = SCREEN_HEIGHT < 700;
  const isMediumScreen = SCREEN_HEIGHT >= 700 && SCREEN_HEIGHT < 900;
  const isLargeScreen = SCREEN_HEIGHT >= 900;

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

  const [selectedClass, setSelectedClass] = useState<string>("classA");
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_HEIGHT,
          zIndex: 1,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, HEADER_HEIGHT],
                outputRange: [0, -HEADER_HEIGHT / 2],
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
          zIndex: 2,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, HEADER_HEIGHT],
                outputRange: [0, -HEADER_HEIGHT / 4],
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
                  Sarah Chen
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
                    onValueChange={(itemValue) => setSelectedClass(itemValue)}
                    dropdownIconColor="#898989"
                    dropdownIconRippleColor="#e5e5e5"
                    style={{
                      color: "#000000",
                      width: "100%",
                      fontSize: getResponsiveValue(14, 16, 18),
                    }}
                  >
                    <Picker.Item label="Class A" value="classA" />
                    <Picker.Item label="Class B" value="classB" />
                    <Picker.Item label="Class C" value="classC" />
                  </Picker>
                </View>
              </View>
            </Animated.View>
          </View>
        </SafeAreaView>
      </Animated.View>

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT - 40, paddingBottom: 60 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View
          className="bg-white"
          style={{
            minHeight: SCREEN_HEIGHT,
            paddingHorizontal: getResponsiveValue(16, 20, 24),
          }}
        >
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
