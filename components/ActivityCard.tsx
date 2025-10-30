import { Image, View } from "react-native";
import { Text } from "./ui";

export default function ActivityCard() {
  return (
    <View className="border-[#E5E7EB] border-solid border-[1px] shadow-sm w-full h-fit rounded-lg flex-row justify-between items-center p-5 bg-white">
      <View className="flex-col">
        <View className="flex-row items-center gap-2">
          <View className="bg-[#338BFF1A] w-10 h-10 rounded-lg p-2">
            <Image
              source={require("../assets/images/icons/blue-book.png")}
              className="w-full h-full"
            />
          </View>
          <Text className="text-[16px] font-semibold text-black mb-1 text-center">
            Activities
          </Text>
        </View>
        <View className="flex-row mt-4 justify-between w-full">
          <Text className="text-[#1F242E] text-[14px] leading-3">My Progress</Text>
          <Text className="text-[#737B8C] font-semibold text-right">
            45/52 activities completed
          </Text>
        </View>
        <View className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <View 
            className="bg-green-500 h-2 rounded-full" 
            style={{ width: `${(45/52) * 100}%` }}
          />
        </View>
      </View>
    </View>
  );
}
