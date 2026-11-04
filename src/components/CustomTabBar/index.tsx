import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { themas } from '../../global/themes';

const tabInfo = {
  NovoProduto: { label: 'Novo', icon: 'add-box' },
  SaidaProduto: { label: 'Saída', icon: 'exit-to-app' },
  ControleEstoque: { label: 'Estoque', icon: 'inventory-2' },
} as const;

export default function CustomTabBar({ state, navigation, insets }: BottomTabBarProps) {
  return (
    <View style={[styles.tabArea, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const info = tabInfo[route.name as keyof typeof tabInfo];
        const color = focused ? themas.Colors.primary : themas.Colors.gray;

        function onPress() {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabButton}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={focused ? { selected: true } : {}}
            accessibilityLabel={info.label}
            activeOpacity={0.7}
          >
            <MaterialIcons name={info.icon} size={26} color={color} />
            <Text style={[styles.tabText, { color }]}>{info.label}</Text>
            {focused && <View style={styles.activeLine} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
