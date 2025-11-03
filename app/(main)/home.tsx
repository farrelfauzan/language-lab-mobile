import ActivityCard from "@/components/ActivityCard";
import AnalyticsCard from "@/components/AnalyticsCard";
import Leaderbaord from "@/components/Leaderbaord";
import { LeaderboardDialog } from "@/components/LeaderboardDialog";
import PerformanceReport from "@/components/PerformanceReport";
import UpcomingSchedule from "@/components/UpcomingSchedule";
import { useGetUpcomingNotification } from "@/query/notifications";
import { useGetstudentOverview } from "@/query/student-overview";
import { RootState } from "@/store/store";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const params = useLocalSearchParams<{ classId: string }>();

  const user = useSelector((state: RootState) => state.auth.user);

  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  const leaderboard = [
    { id: "1", name: "Alice Johnson", score: 95 },
    { id: "2", name: "Bob Smith", score: 90 },
    { id: "3", name: "Charlie Brown", score: 88 },
    { id: "4", name: "Diana Prince", score: 85 },
    { id: "5", name: "Ethan Hunt", score: 80 },
  ];

  const classId = params.classId ? parseInt(params.classId) : undefined;

  const {
    data: studentOverview,
    refetch: refetchStudentOverview,
    isLoading: loadingStudentOverview,
  } = useGetstudentOverview({
    studentId: user?.id,
    classId: classId,
  });

  const { data: upcomingNotification, refetch: refetchUpcomingNotification } =
    useGetUpcomingNotification({
      classId: classId,
    });

  useEffect(() => {
    refetchStudentOverview();
    refetchUpcomingNotification();
  }, [params.classId]);

  if (loadingStudentOverview) {
    return (
      <View className="flex-1 justify-start items-center gap-4 bg-white">
        <View className="w-[350px] h-[120px] rounded-2xl mt-4" />
        <View className="flex-row w-[350px] mt-6 justify-between">
          <View className="w-[160px] h-20 rounded-xl" />
          <View className="w-[160px] h-20 rounded-xl" />
        </View>
        <View className="flex-row w-[350px] mt-4 justify-between">
          <View className="w-[160px] h-20 rounded-xl" />
          <View className="w-[160px] h-20 rounded-xl" />
        </View>
        <View className="w-[350px] h-[180px] rounded-2xl mt-6" />
        <View className="w-[350px] h-[120px] rounded-2xl mt-6" />
        <View className="w-[350px] h-[220px] rounded-2xl mt-6" />
      </View>
    );
  }

  return (
    <View className="flex-1 justify-start items-center gap-4">
      <ActivityCard
        totalActivities={studentOverview?.totalActivities}
        completedActivities={
          (studentOverview?.totalActivities ?? 0) -
          (studentOverview?.uncompletedActivities ?? 0)
        }
      />
      <View className="w-full gap-4">
        <View className="flex-row w-full gap-4">
          <AnalyticsCard
            title="Overall Score"
            value={
              ((studentOverview?.averageScore || 0) * 10)
                .toFixed(1)
                .toString() || "0"
            }
            iconSource={require("../../assets/images/icons/line-chart.png")}
          />
          <AnalyticsCard
            title="Completion Rate"
            value={
              studentOverview?.completitionRate
                ? `${studentOverview.completitionRate}%`
                : "0%"
            }
            iconSource={require("../../assets/images/icons/bulls-eye.png")}
            valueClassName="text-[#00C950]"
          />
        </View>

        <View className="flex-row w-full gap-4">
          <AnalyticsCard
            title="Class Rank"
            value={`#${studentOverview?.classRank || 0}`}
            iconSource={require("../../assets/images/icons/trophy.png")}
            valueClassName="text-[#AD46FF]"
          />
          <AnalyticsCard
            title="Certificates"
            value={studentOverview?.totalCertificates.toString() || "0"}
            iconSource={require("../../assets/images/icons/medal.png")}
            valueClassName="text-[#FF6900]"
          />
        </View>
      </View>
      <View className="w-full">
        {(() => {
          const reading = studentOverview?.typeResults.find(
            (item) => item.type === "reading"
          );
          const speaking = studentOverview?.typeResults.find(
            (item) => item.type === "speaking"
          );
          const listening = studentOverview?.typeResults.find(
            (item) => item.type === "listening"
          );
          const writing = studentOverview?.typeResults.find(
            (item) => item.type === "writing"
          );
          return (
            <PerformanceReport
              readingScore={
                reading?.result?.averageScore !== undefined
                  ? reading.result.averageScore * 100
                  : 0
              }
              speakingScore={
                speaking?.result?.averageScore !== undefined
                  ? speaking.result.averageScore * 100
                  : 0
              }
              listeningScore={
                listening?.result?.averageScore !== undefined
                  ? listening.result.averageScore * 100
                  : 0
              }
              writingScore={
                writing?.result?.averageScore !== undefined
                  ? writing.result.averageScore * 100
                  : 0
              }
            />
          );
        })()}
      </View>
      <View className="w-full">
        <UpcomingSchedule
          data={
            upcomingNotification?.data ?? {
              exams: [],
              assignments: [],
              schedules: [],
              events: [],
            }
          }
        />
      </View>
      <View className="w-full">
        <Leaderbaord
          data={studentOverview?.leaderboard || []}
          onPressSeeAll={() => setIsLeaderboardOpen(true)}
          userRank={studentOverview?.classRank || 0}
          overallScore={studentOverview?.averageScore || 0}
        />
        <LeaderboardDialog
          isOpen={isLeaderboardOpen}
          onClose={() => setIsLeaderboardOpen(false)}
          data={studentOverview?.leaderboard || []}
          userRank={studentOverview?.classRank || 0}
          overallScore={studentOverview?.averageScore || 0}
        />
      </View>
    </View>
  );
}
