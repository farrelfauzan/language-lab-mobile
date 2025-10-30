import { TrendingUp } from "lucide-react-native";
import { View } from "react-native";
import { Text } from "./ui";

export default function CompletionSummary() {
  return (
    <View className="border-[#DBEAFE] border-solid border-[1px] rounded-lg p-5 flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row items-center gap-2">
          <View className="bg-[#F59E0B1A] w-10 h-10 rounded-lg p-2">
            <TrendingUp color="#F59E0B" size={20} />
          </View>
          <Text className="font-semibold">Completion Summary</Text>
        </View>
        <View className="flex flex-col items-center justify-center py-10">
          <View
            style={{
              width: 180,
              height: 180,
              borderRadius: 99,
              borderWidth: 2,
              borderColor: "#10B981",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#D0FAE5",
            }}
          >
            <Text className="text-[#006045] font-bold text-[28px]">75%</Text>
          </View>
          <View className="px-16">
            <Text className="mt-6 text-[#374151] text-center text-[15px] px-4">
              Excellent progress!
            </Text>
            <Text className="mt-2 text-[#6B7280] text-center text-[13px] px-4">
              You've completed 6 out of 8 tasks this month
            </Text>
          </View>
        </View>
        <View className="flex flex-row w-full pb-3">
          <View className="flex-1 items-center">
            <Text className="text-[#10B981] font-bold text-[24px]">6</Text>
            <Text className="text-[#6B7280] text-[12px]">Completed</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-[#EF4444] font-bold text-[24px]">2</Text>
            <Text className="text-[#6B7280] text-[12px]">Incomplete</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-[#F59E0B] font-bold text-[24px]">1</Text>
            <Text className="text-[#6B7280] text-[12px]">Late</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
