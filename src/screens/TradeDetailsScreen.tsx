import { View, Text, Pressable } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/trade";
import { mockTrades } from "../data/mockTrades";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../theme/colors";

type props = NativeStackScreenProps<RootStackParamList, "TradeDetails">;

export default function TradeDetailsScreen({ route, navigation }: props) {
  const { TradeId } = route.params;
  const trade = mockTrades.find((t) => t.id === TradeId);
  return (
    <SafeAreaView className=" bg-background flex-1">
      <View className=" mx-5">
        <View className=" flex-row justify-between items-center">
          <View className=" bg-surface rounded-2xl border-1 border-slate-700/60">
            <Text className=" text-text-secondary p-1 text-sm"> Fictional Demo Data</Text>
          </View>
          <Pressable
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Go Back"
            className=" bg-surface rounded-2xl flex-row items-center justify-center">
            <Entypo name="arrow-bold-left" size={16} color={colors.textSecondary} />
            <Text className=" text-text-secondary text-base"> Go Back</Text>
          </Pressable>
        </View>

        {/* Header */}
        <View className=" my-4">
          <Text className=" text-text-primary text-3xl">{trade?.company}</Text>
          <Text className=" text-text-secondary">
            {trade?.ticker} . {trade?.sector}
          </Text>
        </View>
        {/* card */}
        <View className=" bg-surface p-5">
          <Text className=" text-text-primary"> {trade?.signal}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
