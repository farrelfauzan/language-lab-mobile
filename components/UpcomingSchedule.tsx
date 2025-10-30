import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "./ui";

type ScheduleItem = {
  id: number;
  month: string;
  day: number;
  title: string;
  time: string;
};

type UpcomingScheduleProps = {
  data: ScheduleItem[];
};

export default function UpcomingSchedule({ data }: UpcomingScheduleProps) {
  return (
    <View className="border-[#E5E7EB] border-solid border-[1px] rounded-lg p-5 flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row items-center gap-2">
          <View className="bg-[#0DA2E71A] w-10 h-10 rounded-lg p-2">
            <Image
              source={require("../assets/images/icons/calendar-blue.png")}
              className="w-full h-full"
            />
          </View>
          <Text className="font-semibold">Upcoming Schedule</Text>
        </View>
        <View className="mt-4">
          {data.map((item) => (
            <View
              key={`${item.month}-${item.day}`}
              className="border-none bg-[#F3F5F780] rounded-lg p-4 flex-row justify-between items-center mb-3"
            >
              <View className="flex-col">
                <Text className="font-medium text-[10px]">{item.month}</Text>
                <Text className="font-bold text-[12px] mt-1 text-center">
                  {item.day}
                </Text>
              </View>
              <View className="flex-col flex-1 mx-4">
                <Text className="font-medium text-[14px]">{item.title}</Text>
                <Text className="text-[#737B8C] text-[14px] mt-1">
                  {item.time}
                </Text>
              </View>
            </View>
          ))}
          <TouchableOpacity className="flex-row items-center justify-center gap-2">
            <Text className="text-center text-green-500 text-[14px] font-medium mt-2">
              View All Schedules
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
