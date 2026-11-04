import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { themas } from '../../global/themes';

type IconName = React.ComponentProps<typeof MaterialIcons>['name'];

type Props = {
  title: string;
  subtitle: string;
  icon: IconName;
};

export default function PageHeader({ title, subtitle, icon }: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.iconBox}>
        <MaterialIcons name={icon} size={32} color={themas.Colors.primary} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
