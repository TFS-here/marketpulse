import { View, Text, Pressable } from "react-native";
import React from "react";
import { InsiderTrade } from "../types/trade";
import { mockTrades } from "../data/mockTrades";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../theme/colors";
import { formatCurrancy } from "../utils/formatters";
import SignalBadge from "./SignalBadge";
type TradeCardProps = InsiderTrade & {
  onPress?: () => void;
};

export default function TradeCard({
  id,
  ticker,
  company,
  insider,
  role,
  type,
  transactionCode,
  filedAt,
  signalStrength,
  value,
  signal,
  onPress,
}: TradeCardProps) {
  return (
    <Pressable onPress={onPress} className=" bg-surface mb-3 rounded-2xl p-5 flex-row justify-between">
      <View className="">
        <View className=" flex-row items-center mb-2">
          <Text className=" text-text-primary font-extrabold text-4xl">{ticker}</Text>
          <View className=" flex-row">
            <Entypo name="arrow-long-up" size={16} color={transactionCode === "S" ? colors.sale : colors.purchase} />
            <Text className={`${transactionCode === "S" ? "text-sale" : "text-purchase"} `}>
              {transactionCode == "S" ? "SALE" : "PURCHASE"}
            </Text>
          </View>
        </View>
        <Text className="text-text-secondary mb-2 text-lg">{company}</Text>
        <Text className=" text-text-secondary mb-2 text-lg">
          {insider} . {role}
        </Text>
        <Text className=" text-text-secondary text-lg"> Filed: {filedAt}</Text>
      </View>
      <View className=" flex-col justify-between">
        <Text className=" text-text-primary text-3xl font-semibold">{formatCurrancy(value)}</Text>
        <SignalBadge signalStrength={signalStrength} />
      </View>
    </Pressable>
  );
}
