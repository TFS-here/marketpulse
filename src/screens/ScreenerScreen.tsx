import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../theme/colors";
import Feather from "@expo/vector-icons/Feather";
import { mockTrades } from "../data/mockTrades";
import FilterChip from "../components/FilterChip";
import TradeCard from "../components/TradeCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/trade";

type props = NativeStackScreenProps<RootStackParamList, "Screener">;

export default function ScreenerScreen({ navigation }: props) {
  const [search, setSearch] = useState("");
  const [transactionFilter, setTransactionFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [valueFilter, setValueFilter] = useState(0);

  const clearFilter = () => {
    setSearch("");
    setTransactionFilter("All");
    setRoleFilter("All Roles");
    setValueFilter(0);
  };

  const filterTrade = mockTrades.filter((trades) => {
    const matchSearch =
      trades.company.toLowerCase().includes(search.toLowerCase()) ||
      trades.ticker.toLowerCase().includes(search.toLowerCase());

    const matchTransaction = transactionFilter === "All" || trades.type === transactionFilter;
    const matchRole = roleFilter === "All Roles" || trades.role === roleFilter;
    const matchValue = valueFilter === 0 || trades.value >= Number(valueFilter);

    return matchSearch && matchTransaction && matchRole && matchValue;
  });

  return (
    <SafeAreaView className="flex-1 bg-background px-5" edges={["top", "left", "right"]}>
      {/* Header */}
      <View className="flex-row justify-between items-center mb-2">
        <View>
          <Text className="text-analytics2">DISCOVERY</Text>
          <Text className=" text-text-primary text-2xl font-bold">Latest Trade</Text>
        </View>
        <Pressable onPress={() => navigation.goBack()} accessibilityRole="button" accessibilityLabel="cross">
          <Entypo name="cross" size={16} color={colors.textSecondary} />
        </Pressable>
      </View>
      {/* Search */}
      <View className=" flex-row items-center mb-3  bg-surface border border-slate-700/60 rounded-xl p-1 justify-center">
        <Feather name="search" size={16} color={colors.textSecondary} />
        <TextInput
          className=" flex-1 text-text-secondary ml-2"
          placeholder="Search Ticker or Company"
          placeholderTextColor={colors.textSecondary}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      {/* Transaction */}
      <View>
        <Text className=" text-text-secondary mb-3">Transaction</Text>
        <View className=" flex-row justify-between items-center gap-2">
          <FilterChip
            label={"All"}
            selected={transactionFilter === "All"}
            onPress={() => setTransactionFilter("All")}
          />
          <FilterChip
            label={"Purchases"}
            selected={transactionFilter === "purchase"}
            onPress={() => setTransactionFilter("purchase")}
          />
          <FilterChip
            label={"Sales"}
            selected={transactionFilter === "sale"}
            onPress={() => setTransactionFilter("sale")}
          />
        </View>
      </View>
      {/* Filter Role */}
      <View>
        <Text className=" text-text-secondary my-2">Insider Role</Text>
        <View className=" flex-row gap-2">
          <FilterChip
            label={"All roles"}
            selected={roleFilter === "All Roles"}
            onPress={() => setRoleFilter("All Roles")}
          />
          <FilterChip label={"CEO"} selected={roleFilter === "CEO"} onPress={() => setRoleFilter("CEO")} />
          <FilterChip label={"CFO"} selected={roleFilter === "CFO"} onPress={() => setRoleFilter("CFO")} />
          <FilterChip
            label={"Director"}
            selected={roleFilter === "Director"}
            onPress={() => setRoleFilter("Director")}
          />
        </View>
      </View>

      {/* Filter Value */}
      <View>
        <Text className=" text-text-secondary my-2">Value</Text>
        <View className=" flex-row gap-2">
          <FilterChip label={"Any"} selected={valueFilter === 0} onPress={() => setValueFilter(0)} />
          <FilterChip label={"$100K+"} selected={valueFilter === 100000} onPress={() => setValueFilter(100000)} />
          <FilterChip label={"$500K+"} selected={valueFilter === 500000} onPress={() => setValueFilter(500000)} />
          <FilterChip label={"$1M+"} selected={valueFilter === 1000000} onPress={() => setValueFilter(1000000)} />
        </View>
      </View>

      <View className=" flex-row justify-between items-center my-5">
        <Text className=" text-text-secondary">
          {filterTrade.length} {filterTrade.length > 1 ? "results" : "result"}
        </Text>
        <Pressable onPress={clearFilter} accessibilityRole="button" accessibilityLabel="Clear Filter">
          <Text className="text-text-secondary">Clear Filter</Text>
        </Pressable>
      </View>

      <ScrollView>
        <View>
          {filterTrade.length === 0 ? (
            <View className=" items-center justify-center flex-1">
              <Text className="text-text-secondary">No fictional demo trades match those filters.</Text>
              <Pressable onPress={clearFilter} accessibilityRole="button" accessibilityLabel="Clear Filter">
                <Text className="text-text-secondary">Clear Filter</Text>
              </Pressable>
            </View>
          ) : (
            filterTrade.map((trade) => (
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
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
