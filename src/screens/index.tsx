import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';

export type RootStackParamList = {
  Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
}
