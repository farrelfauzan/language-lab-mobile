import { Tabs } from "expo-router";
import React from "react";

import Header from "@/components/Header";
import {
  Image,
  View
} from "react-native";
import "../../global.css";

export default function TabLayout() {
  return (
    <Tabs
      screenLayout={({ children }) => (
        <Header>
          {children}
        </Header>
      )}
      screenOptions={{
        tabBarActiveTintColor: "#22C55E",
        tabBarInactiveTintColor: "#FFFFFF",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#050A22",
          borderTopColor: "transparent",
          height: 100,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "400",
          marginTop: 5,
        },
        tabBarIconStyle: {
          marginBottom: 0,
          width: "110%",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size, focused }) => (
            <View className="flex-1 items-center justify-center w-full">
              {focused ? (
                <View className="w-full h-1 bg-green-500 mb-2" />
              ) : (
                <View className="mb-2 h-1" />
              )}
              <Image
                source={require("../../assets/images/icons/qr-code.png")}
                className="w-8 h-8"
                style={{ tintColor: focused ? "#22C55E" : "#FFFFFF" }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color, size, focused }) => (
            <View className="flex-1 items-center justify-center w-full">
              {focused ? (
                <View className="w-full h-1 bg-green-500 mb-2" />
              ) : (
                <View className="mb-2" />
              )}
              <Image
                source={require("../../assets/images/icons/calendar.png")}
                className="w-8 h-8"
                style={{ tintColor: focused ? "#22C55E" : "#FFFFFF" }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="completion"
        options={{
          title: "Completion",
          tabBarIcon: ({ color, size, focused }) => (
            <View className="flex-1 items-center justify-center w-full">
              {focused ? (
                <View className="w-full h-1 bg-green-500 mb-2" />
              ) : (
                <View className="mb-2" />
              )}
              <Image
                source={require("../../assets/images/icons/book.png")}
                className="w-8 h-8"
                style={{ tintColor: focused ? "#22C55E" : "#FFFFFF" }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="performance"
        options={{
          title: "Performance",
          tabBarIcon: ({ color, size, focused }) => (
            <View className="flex-1 items-center justify-center w-full">
              {focused ? (
                <View className="w-full h-1 bg-green-500 mb-2" />
              ) : (
                <View className="mb-2" />
              )}
              <Image
                source={require("../../assets/images/icons/user.png")}
                className="w-8 h-8"
                style={{ tintColor: focused ? "#22C55E" : "#FFFFFF" }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
