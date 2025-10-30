import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";
import { Text } from "./ui";


type PerformanceReportProps = {
    readingScore?: number;
    speakingScore?: number;
    listeningScore?: number;
    writingScore?: number;
}

export default function PerformanceReport({ readingScore, speakingScore, listeningScore, writingScore }: PerformanceReportProps) {
  return (
    <View className="border-[#E5E7EB] border-solid border-[1px] rounded-lg p-5 flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row items-center gap-2">
          <View className="bg-[#338BFF1A] w-10 h-10 rounded-lg p-2">
            <Image
              source={require("../assets/images/icons/up-trend.png")}
              className="w-full h-full"
            />
          </View>
          <Text className="font-semibold">Performance Report</Text>
        </View>
        <View className="mt-4 flex-row gap-2">
          <LinearGradient
            colors={['#F9FAFB', '#EFF6FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 10,
              padding: 20,
              borderColor: "#DBEAFE",
              borderWidth: 1,
            }}
            className="flex-1"
          >
            <Text className="text-[#2563EB] text-2xl font-bold text-center">{readingScore}%</Text>
            <Text className="text-center mt-2 text-[#737B8C]">
                Reading
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={['#F9FAFB', '#EFF6FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 10,
              padding: 20,
              borderColor: "#DBEAFE",
              borderWidth: 1,
            }}
            className="flex-1"
          >
            <Text className="text-orange-500 text-2xl font-bold text-center">{speakingScore}%</Text>
            <Text className="text-center mt-2 text-[#737B8C]">
                Speaking
            </Text>
          </LinearGradient>
        </View>
        <View className="mt-4 flex-row gap-2">
          <LinearGradient
            colors={['#F9FAFB', '#EFF6FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 10,
              padding: 20,
              borderColor: "#DBEAFE",
              borderWidth: 1,
            }}
            className="flex-1"
          >
            <Text className="text-purple-500 text-2xl font-bold text-center">{listeningScore}%</Text>
            <Text className="text-center mt-2 text-[#737B8C]">
                Listening
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={['#F9FAFB', '#EFF6FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              borderRadius: 10,
              padding: 20,
              borderColor: "#DBEAFE",
              borderWidth: 1,
            }}
            className="flex-1"
          >
            <Text className="text-green-500 text-2xl font-bold text-center">{writingScore}%</Text>
            <Text className="text-center mt-2 text-[#737B8C]">
                Writing
            </Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}
