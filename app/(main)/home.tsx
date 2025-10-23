import ActivityCard from "@/components/ActivityCard";
import AnalyticsCard from "@/components/AnalyticsCard";
import Leaderbaord from "@/components/Leaderbaord";
import PerformanceReport from "@/components/PerformanceReport";
import UpcomingSchedule from "@/components/UpcomingSchedule";
import { View } from "react-native";

export default function HomeScreen() {

  const scheduleDate = [
    {
      id: 1,
      month: "Jun",
      day: 12,
      title: "English Speaking Practice",
      time: "10:00 AM - 11:00 AM",
    },
    {
      id: 2,
      month: "Jun",
      day: 15,
      title: "Listening Comprehension Test",
      time: "2:00 PM - 3:00 PM",
    },
    {
      id: 3,
      month: "Jun",
      day: 20,
      title: "Writing Skills Workshop",
      time: "1:00 PM - 2:30 PM",
    }
  ]

  const leaderboard = [
    { id: "1", name: "Alice Johnson", score: 95 },
    { id: "2", name: "Bob Smith", score: 90 },
    { id: "3", name: "Charlie Brown", score: 88 },
    { id: "4", name: "Diana Prince", score: 85 },
    { id: "5", name: "Ethan Hunt", score: 80 },
  ]

  return (
    <View className="flex-1 justify-start items-center gap-4">
      <ActivityCard />
      <View className="w-full gap-4">
        <View className="flex-row w-full gap-4">
          <AnalyticsCard
            title="Overall Score"
            value="87%"
            iconSource={require("../../assets/images/icons/line-chart.png")}
          />
          <AnalyticsCard
            title="Completion Rate"
            value="87%"
            iconSource={require("../../assets/images/icons/bulls-eye.png")}
            valueClassName="text-[#00C950]"
          />
        </View>

        <View className="flex-row w-full gap-4">
          <AnalyticsCard
            title="Class Rank"
            value="#12"
            iconSource={require("../../assets/images/icons/trophy.png")}
            valueClassName="text-[#AD46FF]"
          />
          <AnalyticsCard
            title="Certificates"
            value="3"
            iconSource={require("../../assets/images/icons/medal.png")}
            valueClassName="text-[#FF6900]"
          />
        </View>
      </View>
      <View className="w-full">
        <PerformanceReport
          readingScore={90}
          speakingScore={85}
          listeningScore={88}
          writingScore={82}
        />
      </View>
      <View className="w-full">
        <UpcomingSchedule data={scheduleDate}/>
      </View>
      <View className="w-full">
        <Leaderbaord 
          data={leaderboard}
        />
      </View>
    </View>
  );
}
