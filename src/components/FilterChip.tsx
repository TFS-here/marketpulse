import { View, Text, Pressable } from "react-native";
import React from "react";

type FilterChipProps = () => {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function FilterChip({ label, selected, onPress }: FilterChipProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={`Filter: ${label}`}
      className={` rounded-xl border-1 border-slate-700/60 items-center justify-center flex-1   ${selected ? "bg-analytics/30" : "bg-surface"} `}>
      <Text className=" text-text-secondary p-2 text-base font-bold"> {label}</Text>
    </Pressable>
  );
}
