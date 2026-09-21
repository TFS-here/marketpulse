import { Text, View } from "react-native";
import React from "react";

export const formatCurrancy = (value: number) => {
  if (value >= 1000000000) return `$${(value / 1000000000).toFixed(2)}B`;
  else if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
  else if (value >= 1000) return `$${(value / 1000).toFixed(2)}K`;
  else return `$${value.toFixed(2)}`;
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
