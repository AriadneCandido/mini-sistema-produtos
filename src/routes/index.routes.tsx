import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Produto from '../pages/produto';
import BottomRoutes from './bottom.routes';

export type RootStackParamList = {
  NovoProduto: undefined;
  BottomRoutes: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="NovoProduto" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NovoProduto" component={Produto} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
