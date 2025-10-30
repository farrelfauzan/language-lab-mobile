import CompletionSummary from "@/components/CompletionSummary";
import DetailedHistory from "@/components/DetailedHistory";
import React from "react";
import { View } from "react-native";

export default function CompletionScreen() {
  return (
    <View className="flex-1 bg-white gap-3">
      <View>
        <CompletionSummary />
      </View>
      <View>
        <DetailedHistory />
      </View>
    </View>
  );
}
