import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/trade';
import HomeScreen from '../screens/HomeScreen';
import ScreenerScreen from '../screens/ScreenerScreen';
import TradeDetailsScreen from '../screens/TradeDetailsScreen';
import React from 'react'

const stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
        <stack.Screen name='Home' component={HomeScreen}/>
        <stack.Screen name='Screener' component = {ScreenerScreen} />
        <stack.Screen name='TradeDetails' component = {TradeDetailsScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator