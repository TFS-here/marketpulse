import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/trade";
import { mockTrades } from "../data/mockTrades";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../theme/colors";
import { formatCurrancy, formatDate, formatTime } from "../utils/formatters";
import MockActivityChart from "../components/MockActivityChart";

type props = NativeStackScreenProps<RootStackParamList, "TradeDetails">;

export default function TradeDetailsScreen({ route, navigation }: props) {
  const { TradeId } = route.params;
  const trade = mockTrades.find((t) => t.id === TradeId);

  if (!trade) return null;

  const isPurchase = trade?.type === "purchase";

  return (
    <SafeAreaView className=" bg-background flex-1">
      <ScrollView>
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
          <View className=" my-5">
            <Text className=" text-text-primary text-3xl">{trade?.company}</Text>
            <Text className=" text-text-secondary">
              {trade?.ticker} . {trade?.sector}
            </Text>
          </View>
          {/* card */}
          <View className=" bg-surface p-6 rounded-2xl border border-slate-700/60 justify-center ">
            <Text className={` text-2xl ${isPurchase ? "text-purchase" : "text-sale"}`}>{trade?.signal}</Text>
            <Text className=" text-text-primary text-3xl font-bold mt-2">{formatCurrancy(trade?.value)}</Text>
            <Text className=" text-text-secondary text-lg">Fictional Demo {isPurchase ? "Buy" : "Sale"}</Text>
          </View>

          <View className=" flex-row justify-between gap-2 mt-3">
            <View className=" bg-surface flex-1 rounded-xl p-3">
              <Text className=" text-text-secondary text-lg">Insider</Text>
              <Text className=" text-text-primary text-base">
                {trade?.insider} . {trade?.role}
              </Text>
            </View>
            <View className=" bg-surface flex-1 rounded-xl p-3">
              <Text className="text-text-secondary text-lg">Transaction</Text>
              <Text className=" text-text-primary text-base">
                {isPurchase ? "Purchase ↑" : "Sale ↓"} . Code {trade?.transactionCode}
              </Text>
            </View>
          </View>

          <View className=" flex-row justify-between gap-2 mt-3">
            <View className=" bg-surface flex-1 rounded-xl p-3">
              <Text className=" text-text-secondary text-lg">Shares</Text>
              <Text className=" text-text-primary text-base">{trade?.shares.toLocaleString()} shares</Text>
            </View>
            <View className=" bg-surface flex-1 rounded-xl p-3">
              <Text className="text-text-secondary text-lg">Price/Share</Text>
              <Text className=" text-text-primary text-base">{formatCurrancy(trade?.pricePerShare)} (demo)</Text>
            </View>
          </View>

          <View className=" flex-row justify-between gap-2 mt-3">
            <View className=" bg-surface flex-1 rounded-xl p-3">
              <Text className=" text-text-secondary text-lg">Total value</Text>
              <Text className=" text-text-primary text-base">{formatCurrancy(trade?.value)} (demo)</Text>
            </View>
            <View className=" bg-surface flex-1 rounded-xl p-3">
              <Text className="text-text-secondary text-lg">Signal strength</Text>
              <Text className=" text-text-primary text-base">{trade?.signalStrength}</Text>
            </View>
          </View>

          <View className=" flex-row justify-between gap-2 mt-3">
            <View className=" bg-surface flex-1 rounded-xl p-3">
              <Text className=" text-text-secondary text-lg">Transaction date</Text>
              <Text className=" text-text-primary text-base">{formatDate(trade.transactionDate)}</Text>
            </View>
            <View className=" bg-surface flex-1 rounded-xl p-3">
              <Text className="text-text-secondary text-lg">Filed</Text>
              <Text className=" text-text-primary text-base">
                {formatDate(trade.filedAt)} . {formatTime(trade.filedAt)}
              </Text>
            </View>
          </View>
          {/* Mock activity */}

          <View>
            <MockActivityChart data={trade.weeklyActivity} />
          </View>

          {/* Disclaimer */}
          <View className=" bg-surface mt-5 p-5">
            <Text className=" text-text-primary"> Why this matter?</Text>
            <Text className=" text-text-secondary mt-4">
              A {trade.signal} can be a data point for further research because it shows a disclosed transaction by
              someone close to the company. It does not reveal the person’s full financial situation or predict future
              performance.
            </Text>
          </View>

          <View className=" my-5 p-5">
            <Text className=" text-text-secondary">
              This prototype uses mock data for demonstration only. Insider-trading filings are public disclosures and
              do not constitute investment advice. Past activity does not guarantee future stock performance.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
