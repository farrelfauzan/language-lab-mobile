import { Text } from "@/components/ui/Text";
import { useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Pressable,

  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

export interface SlideData {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

interface OnBoardingCarouselProps {
  slides: SlideData[];
}

export default function OnBoardingCarousel({
  slides,
}: OnBoardingCarouselProps) {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const handleDotPress = (index: number) => {
    if (carouselRef.current) {
      if (index >= slides.length) {
        router.replace("/(auth)/login");
      } else {
        carouselRef.current.scrollTo({ index, animated: true });
        setActiveIndex(index);
      }
    }
  };

  const handleGetStarted = () => {
    router.replace("/(auth)/login");
  };

  const onSnapToItem = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <Carousel
      ref={carouselRef}
      width={screenWidth}
      height={screenHeight}
      data={slides}
      onSnapToItem={onSnapToItem}
      renderItem={({ item }) => (
        <View className="flex-1 bg-white">
          <Image
            source={item.image}
            className="w-full h-[500px]"
            resizeMode="cover"
          />
          <View className="px-4 py-12">
            <Text className="text-[20px] font-semibold text-center mb-4">
              {item.title}
            </Text>
            <Text className="text-[14px] font-normal text-center text-gray-600">
              {item.description}
            </Text>
            <View className="flex-row justify-center my-6">
              {Array.from({ length: slides.length }, (_, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => handleDotPress(i)}
                  className={`rounded-full mx-1 ${
                    activeIndex === i
                      ? "w-10 h-2 bg-[#2C7743]"
                      : "w-10 h-2 bg-neutral-300"
                  }`}
                />
              ))}
            </View>
          </View>
          <View className="w-full flex-col items-center gap-3 mb-8">
            <Pressable className="bg-[#22C55E] w-4/5 rounded-lg py-4 px-4" onPress={handleGetStarted}>
              <Text className="text-neutral-100 text-center">Get Started</Text>
            </Pressable>
            <Pressable
              className="border border-green-500 w-4/5 rounded-lg py-4 px-4"
              onPress={() => {
                handleDotPress(activeIndex + 1);
              }}
            >
              <Text className="text-[#22C55E] text-center">Next</Text>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
}
