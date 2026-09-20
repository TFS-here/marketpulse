import { View, Text } from 'react-native'
import React from 'react'

type SummaryCardProps = {
    value:string;
    label:string;
    colorClass:string;
}

export const SummaryCard = ({
    label,
    value,
    colorClass,
}:SummaryCardProps)=>{
  return (
                <View  className=" flex-1 bg-surface p-4 rounded-2xl justify-center items-center">
                    <Text className=" text-text-secondary text-lg">{label}</Text>
                    <Text className= {`${colorClass} text-3xl font-bold my-2`}>{value}</Text>
                </View>
  );
}