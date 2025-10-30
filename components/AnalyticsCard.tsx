import { cn } from "@/libs/cn";
import { Image, View } from "react-native";
import { Text } from "./ui";

type AnalyticsCardProps = {
  title: string;
  value: string;
  iconSource: any;
  valueClassName?: string;
};

export default function AnalyticsCard({
  title,
  value,
  iconSource,
  valueClassName,
}: AnalyticsCardProps) {
  return (
    <View className="border-[#E5E7EB] border-solid border-[1px] rounded-lg p-4 flex-1 bg-white">
      <View className="flex-row justify-between items-center">
        <View className="flex-col">
          <Text className="font-medium text-[14px] ">{title}</Text>
          <Text
            className={cn(
              "text-[24px] font-bold mt-2 text-[#2563EB]",
              valueClassName
            )}
          >
            {value}
          </Text>
        </View>
        <View className="flex-col items-end justify-center">
          <Image source={iconSource} className="w-8 h-8" />
        </View>
      </View>
    </View>
  );
}
