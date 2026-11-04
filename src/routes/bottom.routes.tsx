import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Produto from '../pages/produto';
import SaidaProduto from '../pages/saida';
import ControleEstoque from '../pages/estoque';
import CustomTabBar from '../components/CustomTabBar';

export type BottomTabParamList = {
  NovoProduto: undefined;
  SaidaProduto: undefined;
  ControleEstoque: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="SaidaProduto"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="NovoProduto" component={Produto} options={{ title: 'Novo Produto' }} />
      <Tab.Screen name="SaidaProduto" component={SaidaProduto} options={{ title: 'Saída de Produto' }} />
      <Tab.Screen name="ControleEstoque" component={ControleEstoque} options={{ title: 'Controle de Estoque' }} />
    </Tab.Navigator>
  );
}
