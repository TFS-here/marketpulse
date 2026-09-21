import { View, Text } from "react-native";
import React from "react";
import { SignalStrength } from "../types/trade";

type signalBadgeProps = {
  signalStrength: SignalStrength;
};

export default function SignalBadge({ signalStrength }: signalBadgeProps) {
  return (
    <Text
      className={` rounded-2xl text-center self-end py-1 px-2  ${signalStrength === "High" ? "text-red-950 bg-red-400" : signalStrength === "Medium" ? "text-green-950 bg-green-400" : "text-slate-950 bg-slate-400"}`}>
      {signalStrength}
    </Text>
  );
}
