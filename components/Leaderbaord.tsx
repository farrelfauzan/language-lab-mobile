import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "./ui";

type Leaderboard = {
  id: string;
  name: string;
  score: number;
};

type LeaderboardProps = {
  data: Leaderboard[];
  onPressSeeAll?: () => void;
};

export default function Leaderboard({ data, onPressSeeAll }: LeaderboardProps) {
  return (
    <View className="border-[#E5E7EB] border-solid border-[1px] rounded-lg p-5 flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row items-center gap-2">
          <View className="bg-[#F59F0A1A] w-10 h-10 rounded-lg p-2">
            <Image
              source={require("../assets/images/icons/trophy-yellow.png")}
              className="w-full h-full"
            />
          </View>
          <Text className="font-semibold">Leaderboard</Text>
        </View>
        <View className="mt-4">
          {data.map((item, index) => (
            <View
              className="flex-row justify-between items-center mb-3"
              key={item.id}
            >
              <View className="flex-row gap-3 items-center">
                <View
                  className={
                    item.id === "1"
                      ? "w-5 h-5 rounded-full bg-[#FBBF24] justify-center items-center"
                      : "w-5 h-5 rounded-full bg-gray-300 justify-center items-center"
                  }
                >
                  <Text className="text-white text-[10px] text-center">
                    {index + 1}
                  </Text>
                </View>
                <Image
                  source={require("../assets/images/profile-1.png")}
                  className="w-8 h-8 rounded-full"
                />
                <Text className="font-medium text-[14px] text-center">
                  {item.name}
                </Text>
              </View>
              <Text className="text-neutral-900 font-bold text-[20px]">
                {item.score}
              </Text>
            </View>
          ))}
          <View className="flex-row justify-between items-center mb-3 bg-[#EFF6FF] p-2 rounded-lg">
            <View className="flex-row gap-3 items-center">
              <View className="w-7 h-7 rounded-full bg-blue-500 justify-center items-center">
                <Text className="text-white text-center">12</Text>
              </View>
              <Text className="font-medium text-[14px] text-center">You</Text>
            </View>
            <Text className="text-blue-500 font-bold text-[20px]">72</Text>
          </View>
          <TouchableOpacity className="flex-row items-center justify-center gap-2" onPress={onPressSeeAll}>
            <Text className="text-center text-green-500 text-[14px] font-medium mt-2">
              See All Rankings
            </Text>
            <MaterialIcons
              name="arrow-forward"
              size={14}
              color="#22c55e"
              style={{ marginTop: 8 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
