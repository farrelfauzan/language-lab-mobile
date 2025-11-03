import { StudentOverview } from "@/types/student-overview";
import { Crown } from "lucide-react-native";
import {
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "./ui";

interface IModalProps {
  isOpen: boolean;
  data: StudentOverview["leaderboard"];
  userRank: number;
  overallScore: number;
  onClose: () => void;
}

export const LeaderboardDialog = ({
  data,
  isOpen,
  onClose,
  userRank,
  overallScore,
}: IModalProps) => {
  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="absolute inset-0 bg-black/80 justify-center items-center">
        <TouchableOpacity
          className="absolute inset-0"
          activeOpacity={1}
          onPress={onClose}
        />
        <View className="w-full max-w-md bg-white rounded-xl overflow-hidden mx-4">
          {/* Header */}
          <View className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center gap-2">
              <View className="bg-[#F59F0A1A] w-10 h-10 rounded-lg p-2">
                <Image
                  source={require("../assets/images/icons/trophy-yellow.png")}
                  className="w-full h-full"
                />
              </View>
              <Text className="font-semibold text-lg">Leaderboard</Text>
            </View>
            <TouchableOpacity onPress={onClose} className="p-2">
              <Text className="text-xl text-gray-500">✕</Text>
            </TouchableOpacity>
          </View>

          {/* Content */}
          <View className="max-h-[70vh]">
            <ImageBackground
              className="flex items-end justify-center pt-2 bg-black/90 mx-4"
              source={require("../assets/images/podium-bg.png")}
              resizeMode="cover"
            >
              <View className="flex-row items-end justify-center w-full px-4">
                <View className="w-[100px] items-center justify-end">
                  {data[1] && data[1]?.student.picture !== null ? (
                    <Image
                      source={{
                        uri: `${process.env.EXPO_PUBLIC_MINIO_URL}/${data[1]?.student.picture}`,
                      }}
                      className="w-12 h-12 rounded-full mb-2"
                      alt="Marcus"
                    />
                  ) : (
                    <View className="w-9 h-9 rounded-full bg-gray-300 items-center justify-center">
                      <Text className="text-gray-600 text-lg">
                        {data[1]?.student.name.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                  )}
                  <Text
                    className="text-[16px] font-medium text-center text-white mb-2"
                    numberOfLines={2}
                  >
                    {data[1]?.student.name}
                  </Text>
                  <Text className="text-[26px] text-[#22C55E] font-bold text-center mb-2">
                    {(Number(data[1]?.overallScore) || 0) * 10}
                  </Text>
                  <Image
                    source={require("../assets/images/rank-2.png")}
                    className="mr-[25px] w-32 h-36 aspect-video"
                    resizeMode="contain"
                    alt="Rank 2"
                  />
                </View>
                <View
                  className="w-[100px] items-center justify-end"
                  style={{ zIndex: 2 }}
                >
                  <View className="flex-col items-center gap-2">
                    <Crown color="#EAB308" className="w-5 h-5" />
                    {data[0]?.student.picture !== null ? (
                      <Image
                        source={{
                          uri: `${process.env.EXPO_PUBLIC_MINIO_URL}/${data[0]?.student.picture}`,
                        }}
                        className="w-12 h-12 rounded-full mb-2"
                        alt="Rank 1"
                      />
                    ) : (
                      <View className="w-9 h-9 rounded-full bg-gray-300 items-center justify-center">
                        <Text className="text-gray-600 text-lg">
                          {data[0]?.student.name.charAt(0).toUpperCase()}
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text className="text-[16px] font-medium text-center text-white mb-2">
                    {data[0]?.student.name}
                  </Text>
                  <Text className="text-[26px] text-[#22C55E] font-bold text-center mb-7">
                    {((Number(data[0]?.overallScore) || 0) * 10).toFixed(1)}
                  </Text>
                  <Image
                    source={require("../assets/images/rank-1.png")}
                    className="w-48 h-52 aspect-video"
                    resizeMode="contain"
                    alt="Rank 1"
                  />
                </View>
                <View
                  className="w-[100px] items-center justify-end ml-2"
                  style={{ zIndex: 1 }}
                >
                  {data[2] && data[2]?.student.picture !== null ? (
                    <Image
                      source={{
                        uri: `${process.env.EXPO_PUBLIC_MINIO_URL}/${data[2]?.student.picture}`,
                      }}
                      className="w-12 h-12 rounded-full mb-2"
                      alt="Rank 3"
                    />
                  ) : (
                    <View className="w-9 h-9 rounded-full bg-gray-300 items-center justify-center">
                      <Text className="text-gray-600 text-lg">
                        {data[2]?.student.name.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                  )}
                  <Text
                    className="text-[16px] font-medium text-center text-white mb-2"
                    numberOfLines={2}
                  >
                    {data[2]?.student.name}
                  </Text>
                  <Text className="text-[26px] text-[#22C55E] font-bold text-center mb-2">
                    {(Number(data[2]?.overallScore) || 0) * 10}
                  </Text>
                  <Image
                    source={require("../assets/images/rank-3.png")}
                    className="ml-[10px] w-48 h-32 aspect-video"
                    resizeMode="contain"
                    alt="Rank 3"
                  />
                </View>
              </View>
            </ImageBackground>

            {/* Leaderboard List */}
            <ScrollView
              style={{ maxHeight: 200 }}
              contentContainerStyle={{
                paddingBottom: 20,
                paddingHorizontal: 16,
                paddingTop: 16,
              }}
              showsVerticalScrollIndicator={false}
            >
              {data.slice(3).map((student, index) => (
                <LeaderBoardItem
                  key={student.student.id}
                  rank={index + 4}
                  name={student.student.name}
                  score={(Number(student.overallScore) || 0) * 10}
                  picture={student.student.picture}
                />
              ))}
            </ScrollView>
          </View>
          {userRank > 3 && (
            <View className="flex-row items-center justify-between py-1 px-1 mb-4 bg-[#EFF6FF] mx-4 rounded-lg">
              <View className="flex-row items-center gap-3">
                <View className="bg-blue-500 rounded-full p-3">
                  <Text className=" text-[12px] text-white font-semibold">
                    {userRank}
                  </Text>
                </View>
                <View>
                  <Text className="text-[13px] font-medium text-[#111827]">
                    You
                  </Text>
                </View>
              </View>
              <Text className="text-[20px] font-semibold text-blue-500 pr-2">
                {((Number(overallScore) || 0) * 10).toFixed(1)}
              </Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const LeaderBoardItem = ({
  rank,
  name,
  score,
  picture,
}: {
  rank: number;
  name: string;
  score: number;
  picture: string;
}) => {
  return (
    <View className="flex-row items-center justify-between py-2">
      <View className="flex-row items-center gap-3">
        <Text className="text-[#6B7280] text-[14px]">#{rank}</Text>
        {picture !== null ? (
          <Image
            className="w-9 h-9 rounded-full"
            source={{ uri: `${process.env.EXPO_PUBLIC_MINIO_URL}/${picture}` }}
          />
        ) : (
          <View className="w-9 h-9 rounded-full bg-gray-300 items-center justify-center">
            <Text className="text-gray-600 text-lg">
              {name.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}
        <View>
          <Text className="text-[13px] font-medium text-[#111827]">{name}</Text>
        </View>
      </View>
      <Text className="text-[20px] font-semibold text-[#009966] pr-2">
        {score}
      </Text>
    </View>
  );
};
