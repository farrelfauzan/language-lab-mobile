import { Text } from "@/components/ui";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import React, { useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import type { MarkedDates } from "react-native-calendars/src/types";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState<string>(dayjs().format("YYYY-MM-DD"));

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  // --- Pre-marked static dates ---
  const baseMarkedDates: MarkedDates = {
    "2025-09-15": {
      selected: true,
      selectedColor: "#22C55E",
      marked: true,
      dotColor: "#3B82F6",
      customStyles: {
        container: {
          backgroundColor: "#E0F7FA",
          borderRadius: 10,
        },
        text: {
          color: "#22C55E",
          fontWeight: "700", // ✅ string, not number
        },
      },
    },
    "2025-09-25": {
      selected: true,
      selectedColor: "#3B82F6",
      marked: true,
      dotColor: "#F59E42",
      customStyles: {
        container: {
          backgroundColor: "#F3E8FF",
          borderRadius: 10,
        },
        text: {
          color: "#3B82F6",
          fontWeight: "700",
        },
      },
    },
    "2025-09-12": {
      marked: true,
      dotColor: "#22C55E",
      customStyles: {
        container: {
          backgroundColor: "#F0FFF4",
          borderRadius: 10,
        },
        text: {
          color: "#22C55E",
        },
      },
    },
    "2025-09-18": {
      marked: true,
      dotColor: "#F59E42",
      customStyles: {
        container: {
          backgroundColor: "#FFF7ED",
          borderRadius: 10,
        },
        text: {
          color: "#F59E42",
        },
      },
    },
    "2025-09-08": {
      marked: true,
      dotColor: "#EF4444",
      customStyles: {
        container: {
          backgroundColor: "#FEF2F2",
          borderRadius: 10,
        },
        text: {
          color: "#EF4444",
        },
      },
    },
    "2025-09-19": {
      marked: true,
      dotColor: "#22C55E",
      customStyles: {
        container: {
          backgroundColor: "#ECFDF5",
          borderRadius: 10,
        },
        text: {
          color: "#22C55E",
        },
      },
    },
  };

  // --- Merge with dynamic selected date ---
  const markedDates: MarkedDates = {
    ...baseMarkedDates,
    ...(selectedDate
      ? {
          [selectedDate]: {
            selected: true,
            selectedColor: "#22C55E",
            customStyles: {
              container: {
                backgroundColor: "#DCFCE7",
                borderRadius: 10,
              },
              text: {
                color: "#166534",
                fontWeight: "700",
              },
            },
          },
        }
      : {}),
  };

  return (
    <View className="flex-1 bg-white">
      <View className="bg-white rounded-2xl border border-[#E5EAF2] shadow-md p-2">
        <Calendar
          style={{
            borderWidth: 0,
            borderRadius: 18,
            width: 340,
            padding: 0,
          }}
          theme={{
            backgroundColor: "#fff",
            calendarBackground: "#fff",
            textSectionTitleColor: "#A0AEC0",
            textSectionTitleDisabledColor: "#D1D5DB",
            selectedDayBackgroundColor: "#22C55E",
            selectedDayTextColor: "#fff",
            todayTextColor: "#22C55E",
            dayTextColor: "#111827",
            textDisabledColor: "#D1D5DB",
            monthTextColor: "#111827",
            textMonthFontWeight: "700",
            textMonthFontSize: 22,
            textDayFontWeight: "500",
            textDayFontSize: 18,
            textDayHeaderFontWeight: "600",
            textDayHeaderFontSize: 14,
            arrowColor: "#111827",
            dotColor: "#22C55E",
            selectedDotColor: "#fff",
          }}
          renderArrow={(direction) => (
            <View className="border border-[#E5EAF2] rounded-lg px-2.5 py-1.5 bg-white mx-2">
              <Ionicons
                name={direction === "left" ? "chevron-back" : "chevron-forward"}
                size={22}
                color="#111827"
              />
            </View>
          )}
          onDayPress={handleDayPress}
          renderHeader={(date) => (
            <Text className="text-[#111827] font-bold text-[22px] text-center my-2">
              {dayjs(date).format("MMMM YYYY")}
            </Text>
          )}
          markedDates={markedDates}
          markingType="custom"
          hideExtraDays={false}
          firstDay={1}
        />
      </View>
      <View className="">
        <Text className="text-start text-[#111827] mt-4 mb-2 font-semibold text-[16px]">
          {dayjs(selectedDate).isValid()
            ? dayjs(selectedDate).isSame(dayjs(), "day")
              ? "Today's"
              : `${dayjs(selectedDate).format("dddd - MMMM DD, YYYY")}`
            : "No Date Selected"}
        </Text>
        {(() => {
          const events = [
            {
              title: "Workshop: Rahasia Lancar Berbicara Bahasa Spanyol",
              time: "9:00 AM - 11:00 AM",
              color: "bg-blue-500",
            },
            {
              title: "Kelas Percakapan Bahasa Inggris",
              time: "1:00 PM - 2:30 PM",
              color: "bg-green-500",
            },
            {
              title: "Diskusi Budaya Jepang",
              time: "3:00 PM - 4:00 PM",
              color: "bg-purple-500",
            },
            {
              title: "Latihan TOEFL Listening",
              time: "5:00 PM - 6:00 PM",
              color: "bg-orange-500",
            },
          ];
          return (
            <View className="gap-2">
              {events.map((event, idx) => (
                <View
                  key={idx}
                  className={`${event.color} p-6 w-full rounded-lg`}
                >
                  <Text className="text-white font-semibold text-[14px]">
                    {event.title}
                  </Text>
                  <Text className="text-white mt-2 text-[12px]">
                    {event.time}
                  </Text>
                </View>
              ))}
            </View>
          );
        })()}
      </View>
    </View>
  );
}
