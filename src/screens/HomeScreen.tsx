import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/trade";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { mockTrades } from "../data/mockTrades";
import { SummaryCard } from "../components/SummaryCard";
import { colors } from "../theme/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TradeCard from "../components/TradeCard";
import { formatCurrancy } from "../utils/formatters";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

const totalTransaction = mockTrades.length;
const totalPurchase = mockTrades
  .filter((trade) => trade.type === "purchase")
  .reduce((total, trade) => total + trade.value, 0);
const totalSale = mockTrades.filter((trade) => trade.type === "sale").reduce((total, trade) => total + trade.value, 0);

const topSignals = [
  {
    name: "Large CEO Purchase",
    count: mockTrades.filter((trade) => trade.signal === "Large CEO Purchase").length,
    color: colors.purchase,
  },
  {
    name: "Cluster Buy",
    count: mockTrades.filter((trade) => trade.signal === "Cluster Buy").length,
    color: colors.analytics,
  },
  {
    name: "Executive Sale",
    count: mockTrades.filter((trade) => trade.signal === "Executive Sale").length,
    color: colors.sale,
  },
];

type props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: props) {
  return (
    <SafeAreaView className=" flex-1 bg-background px-5" edges={["top", "left", "right"]}>
      {/* Header */}
      <View className=" flex-row justify-between items-center">
        <Text className=" text-text-primary font-extrabold text-3xl mb-5">Market Pulse</Text>
        <View className=" bg-surface p-1 border-1 rounded-xl border-slate-700">
          <Text className="text-text-secondary">Fictional Demo Data</Text>
        </View>
      </View>

      <ScrollView>
        <Pressable
          onPress={() => navigation.navigate("Screener")}
          accessibilityRole="button"
          accessibilityLabel="Search trades in screener"
          className=" bg-surface p-4 rounded-2xl border border-slate-700 flex flex-row justify-between items-center">
          <View className=" flex-row">
            <Feather name="search" size={24} color="#CBD5E1" />
            <Text className=" text-text-secondary ml-3 text-xl"> Search ticker or company</Text>
          </View>
          {/* <AntDesign name="arrow-right" size={24} color="#CBD5E1" /> */}
          <MaterialIcons name="arrow-right-alt" size={32} color="#CBD5E1" />
        </Pressable>

        {/* Overview */}
        <View className=" my-5 flex-row gap-2">
          <SummaryCard label="Transaction" value={`${totalTransaction}`} colorClass="text-analytics" />
          <SummaryCard label="Purchase value" value={`${formatCurrancy(totalPurchase)}`} colorClass="text-purchase" />
          <SummaryCard label="Sale value" value={`${formatCurrancy(totalSale)}`} colorClass="text-sale" />
        </View>

        {/* Top Signals */}
        <View>
          <Text className=" text-text-primary text-2xl font-bold">Top Signals Today</Text>
          <View className="my-5 flex-row gap-2">
            {topSignals.map((signal) => (
              <View key={signal.name} className=" flex-1 bg-surface p-5 rounded-2xl border-1 border-slate-700/60">
                {/* <View className=" flex-row items-center mb-2">
                  <MaterialCommunityIcons name="checkbox-blank-circle" size={8} color={signal.color} />
                  <Text className={" text-2xl font-bold my-2 ml-2"} style={{ color: signal.color }}>
                    {signal.count}
                  </Text>
                  <Text className=" text-2xl ml-2" style={{ color: signal.color }}>
                    {signal.count === 1 ? "signal" : "signals"}
                  </Text>
                </View> */}
                <Text className=" text-text-secondary text-xl font-bold" numberOfLines={2}>
                  {signal.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
        {/* Latest Activity */}
        <View>
          <View className="flex flex-row justify-between items-center">
            <Text className=" text-text-primary text-2xl font-bold">Latest Activity</Text>
            <Pressable
              onPress={() => navigation.navigate("Screener")}
              accessibilityRole="button"
              accessibilityLabel="view all">
              <View className=" flex-row items-center">
                <Text className=" text-analytics text-xl font-bold">View All</Text>
                <MaterialIcons name="arrow-right-alt" size={20} color={colors.analytics} />
              </View>
            </Pressable>
          </View>
          <View>
            {mockTrades.slice(0, 4).map((trade) => (
              <TradeCard
                key={trade.id}
                ticker={trade.ticker}
                company={trade.company}
                insider={trade.insider}
                role={trade.role}
                type={trade.type}
                transactionCode={trade.transactionCode}
                filedAt={trade.filedAt}
                signalStrength={trade.signalStrength}
                value={trade.value}
                onPress={() => navigation.navigate("TradeDetails", { TradeId: trade.id })}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Bottom */}
      {/* <View className=" flex-row  p-5 justify-between rounded-2xl">
        <Pressable
          className=" mx-16 items-center justify-center"
          onPress={() => navigation.navigate("Home")}
          accessibilityRole="button"
          accessibilityLabel="Home">
          <Entypo name="home" size={24} color={colors.textPrimary} />
          <Text className=" text-text-primary">Home</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Screener")}
          accessibilityRole="button"
          accessibilityLabel="Search"
          className=" justify-center items-center mx-16 ">
          <Ionicons name="search" size={24} color={colors.textPrimary} />
          <Text className=" text-text-primary"> Search</Text>
        </Pressable>
      </View> */}
    </SafeAreaView>
  );
}
