import { View, Text } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

type props = {
  data: number[];
};

export default function MockActivityChart({ data }: props) {
  const maxValue = Math.max(...data);
  return (
    <View className=" bg-surface border border-slate-700/60 p-5 mt-5 rounded-2xl">
      <Text className=" text-text-primary text-xl font-bold">Mock 7-day activity</Text>

      <View className=" h-60 flex-row gap-2 items-end">
        {data.map((Value, index) => {
          const heightPercent = (Value / maxValue) * 100;

          return (
            <View
              key={index}
              className="flex-1 rounded-sm"
              style={{
                height: `${heightPercent}%`,
                backgroundColor: colors.analytics,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
