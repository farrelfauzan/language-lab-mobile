import {
  GetUpcomingNotificationsResponse
} from "@/types/notifications";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "./ui";

export default function UpcomingSchedule({
  data,
}: GetUpcomingNotificationsResponse) {
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
          {/* {data.map((item) => (
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
          ))} */}
          {data.exams &&
            data.exams.length > 0 &&
            data.exams.map(
              (exam: GetUpcomingNotificationsResponse["data"]["exams"][number], index: number) => (
                <View
                  key={`exam-${index}`}
                  className="border-none bg-[#F3F5F780] rounded-lg p-4 flex-row justify-between items-center mb-3"
                >
                  <View className="flex-col">
                    <Text className="font-medium text-[10px]">
                      {new Date(exam.start_date).toLocaleString("default", {
                        month: "short",
                      })}
                    </Text>
                    <Text className="font-bold text-[12px] mt-1 text-center">
                      {new Date(exam.start_date).getDate()}
                    </Text>
                  </View>
                  <View className="flex-col flex-1 mx-4">
                    <Text className="font-medium text-[14px]">
                      {exam.title}
                    </Text>
                    <Text className="text-[#737B8C] text-[14px] mt-1">
                      {new Date(exam.start_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      -{" "}
                      {new Date(exam.end_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                  </View>
                </View>
              )
            )}
          {data.schedules && 
            data.schedules.length > 0 &&
            data.schedules.map(
              (schedule: GetUpcomingNotificationsResponse["data"]["schedules"][number], index: number) => (
                <View
                  key={`schedule-${index}`}
                  className="border-none bg-[#F3F5F780] rounded-lg p-4 flex-row justify-between items-center mb-3"
                >
                  <View className="flex-col">
                    <Text className="font-medium text-[10px]">
                      {new Date(schedule.start_at).toLocaleString("default", {
                        month: "short",
                      })}
                    </Text>
                    <Text className="font-bold text-[12px] mt-1 text-center">
                      {new Date(schedule.start_at).getDate()}
                    </Text>
                  </View>
                  <View className="flex-col flex-1 mx-4">
                    <Text className="font-medium text-[14px]">
                      {schedule.class_name}
                    </Text>
                    <Text className="text-[#737B8C] text-[14px] mt-1">
                      {new Date(schedule.start_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      -{" "}
                      {new Date(schedule.end_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                  </View>
                </View>
              )
            )}
            {
            data.events &&
            data.events.length > 0 &&
            data.events.map(
              (event: GetUpcomingNotificationsResponse["data"]["events"][number], index: number) => (
                <View
                  key={`event-${index}`}
                  className="border-none bg-[#F3F5F780] rounded-lg p-4 flex-row justify-between items-center mb-3"
                >
                  <View className="flex-col">
                    <Text className="font-medium text-[10px]">
                      {new Date(event.start_datetime).toLocaleString("default", {
                        month: "short",
                      })}
                    </Text>
                    <Text className="font-bold text-[12px] mt-1 text-center">
                      {new Date(event.start_datetime).getDate()}
                    </Text>
                  </View>
                  <View className="flex-col flex-1 mx-4">
                    <Text className="font-medium text-[14px]">
                      {event.title} 
                    </Text>
                    <Text className="text-[#737B8C] text-[14px] mt-1">
                      {new Date(event.start_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      -{" "}
                      {new Date(event.end_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                  </View>
                </View>
              )
            )}
          {/* Add similar mappings for assignments and events if needed */}
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
