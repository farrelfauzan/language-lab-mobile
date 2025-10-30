import { Calendar, CheckCircle2, XCircle } from "lucide-react-native";
import { View } from "react-native";
import { Text } from "./ui";

export default function DetailedHistory() {
  const historyData = [
    {
      id: 1,
      title: "Spanish Grammar",
      date: "Oct 15, 2025",
      time: "09:00 AM",
      status: "Complete",
      statusColor: "#10B981",
      statusBg: "#D1FAE5",
      icon: "check",
    },
    {
      id: 2,
      title: "English Conversation",
      date: "Oct 16, 2025",
      time: "10:30 AM",
      status: "Incomplete",
      statusColor: "#EF4444",
      statusBg: "#FEE2E2",
      icon: "x",
    },
    {
      id: 3,
      title: "Japanese Listening",
      date: "Oct 17, 2025",
      time: "08:00 AM",
      status: "Complete",
      statusColor: "#10B981",
      statusBg: "#D1FAE5",
      icon: "check",
    },
    {
      id: 4,
      title: "French Vocabulary",
      date: "Oct 18, 2025",
      time: "11:00 AM",
      status: "Complete",
      statusColor: "#10B981",
      statusBg: "#D1FAE5",
      icon: "check",
    },
  ];

  return (
    <View className="border-[#DBEAFE] border-solid border-[1px] rounded-lg p-5 flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row items-center gap-2">
          <View className="bg-[#2D8CFF1A] w-10 h-10 rounded-lg p-2">
            <Calendar color="#2D8CFF" size={20} />
          </View>
          <Text className="font-semibold">Detailed History</Text>
        </View>
        {historyData.map((item, idx) => (
          <View
            key={item.id}
            className="flex flex-row mt-10 px-2 justify-between"
          >
            <View className="flex flex-row gap-2 items-center mb-6">
              {item.icon === "check" ? (
                <CheckCircle2 color={item.statusColor} size={24} />
              ) : (
                <XCircle color={item.statusColor} size={24} />
              )}
              <View className="gap-1">
                <Text className="text-[#374151] text-[15px]">
                  {item.title}
                </Text>
                <Text className="mt-2 text-[#6B7280] text-[13px]">
                  {item.date}
                </Text>
              </View>
            </View>
            <View className="gap-1">
              <View
                className="px-3 py-1 rounded-lg self-center"
                style={{ backgroundColor: item.statusBg }}
              >
                <Text
                  className="font-bold text-[12px]"
                  style={{ color: item.statusColor }}
                >
                  {item.status}
                </Text>
              </View>
              <Text
                className="font-bold text-[12px] self-end"
                style={{ color: "#036630" }}
              >
                {item.time}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
