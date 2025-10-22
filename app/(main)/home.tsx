import ActivityCard from "@/components/ActivityCard";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-start items-center">
      <ActivityCard />
    </View>
  );
}
