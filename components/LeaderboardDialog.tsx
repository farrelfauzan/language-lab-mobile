import { Crown } from "lucide-react-native";
import React from "react";
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
  onClose: () => void;
}

export const LeaderboardDialog = ({ isOpen, onClose }: IModalProps) => {
  const topThree = [
    {
      id: 2,
      name: "Marcus Johnson",
      score: 94,
      rankImg: require("../assets/images/rank-2.png"),
      position: "left",
    },
    {
      id: 1,
      name: "Sarah Chen",
      score: 96,
      rankImg: require("../assets/images/rank-1.png"),
      crown: true,
      position: "center",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      score: 92,
      rankImg: require("../assets/images/rank-3.png"),
      position: "right",
    },
  ];

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
                  <Image
                    source={{ uri: "https://github.com/shadcn.png" }}
                    className="w-12 h-12 rounded-full mb-2"
                    alt="Marcus"
                  />
                  <Text
                    className="text-[16px] font-medium text-center text-white mb-2"
                    numberOfLines={2}
                  >
                    Marcus Johnson
                  </Text>
                  <Text className="text-[26px] text-[#22C55E] font-bold text-center mb-2">
                    94
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
                    <Image
                      source={{ uri: "https://github.com/shadcn.png" }}
                      className="w-12 h-12 rounded-full mb-2"
                      alt="Sarah"
                    />
                  </View>
                  <Text className="text-[16px] font-medium text-center text-white mb-2">
                    Sarah Chen
                  </Text>
                  <Text className="text-[26px] text-[#22C55E] font-bold text-center mb-7">
                    96
                  </Text>
                  <Image
                    source={require("../assets/images/rank-1.png")}
                    className="w-48 h-52 aspect-video"
                    resizeMode="contain"
                    alt="Rank 1"
                  />
                </View>
                <View
                  className="w-[100px] items-center justify-end"
                  style={{ zIndex: 1 }}
                >
                  <Image
                    source={{ uri: "https://github.com/shadcn.png" }}
                    className="w-12 h-12 rounded-full mb-2"
                    alt="Emma"
                  />
                  <Text
                    className="text-[16px] font-medium text-center text-white mb-2"
                    numberOfLines={2}
                  >
                    Emma Rodriguez
                  </Text>
                  <Text className="text-[26px] text-[#22C55E] font-bold text-center mb-2">
                    92
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
              <LeaderBoardItem
                rank={4}
                name="James Kim"
                course="Intermediate English 1"
                score={89}
              />
              <LeaderBoardItem
                rank={5}
                name="Alex Thompson"
                course="Advanced Spanish"
                score={87}
              />
              <LeaderBoardItem
                rank={6}
                name="Maria Garcia"
                course="Basic French"
                score={85}
              />
              <LeaderBoardItem
                rank={7}
                name="John Smith"
                course="Intermediate German"
                score={83}
              />
              <LeaderBoardItem
                rank={8}
                name="Lisa Wang"
                course="Intermediate German"
                score={81}
              />
              <LeaderBoardItem
                rank={9}
                name="David Brown"
                course="Basic Italian"
                score={79}
              />
              <LeaderBoardItem
                rank={10}
                name="Sophie Miller"
                course="Advanced French"
                score={77}
              />
            </ScrollView>
          </View>
          <View className="flex-row items-center justify-between py-1 px-1 mb-4 bg-[#EFF6FF] mx-4 rounded-lg">
            <View className="flex-row items-center gap-3">
              <View className="bg-blue-500 rounded-full p-3">
                <Text className=" text-[12px] text-white font-semibold">20</Text>
              </View>
              <View>
                <Text className="text-[13px] font-medium text-[#111827]">
                  You
                </Text>
              </View>
            </View>
            <Text className="text-[20px] font-semibold text-blue-500 pr-2">
              87
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const LeaderBoardItem = ({
  rank,
  name,
  course,
  score,
}: {
  rank: number;
  name: string;
  course: string;
  score: number;
}) => {
  return (
    <View className="flex-row items-center justify-between py-2">
      <View className="flex-row items-center gap-3">
        <Text className="text-[#6B7280] text-[14px]">#{rank}</Text>
        <Image
          className="w-9 h-9 rounded-full"
          source={{ uri: "https://github.com/shadcn.png" }}
        />
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
