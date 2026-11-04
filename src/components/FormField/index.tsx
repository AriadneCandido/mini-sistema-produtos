import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { themas } from '../../global/themes';

type IconName = React.ComponentProps<typeof MaterialIcons>['name'];
type Props = {
  label: string;
  placeholder: string;
  icon: IconName;
  numeric?: boolean;
};

export default function FormField({ label, placeholder, icon, numeric = false }: Props) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBox}>
        <MaterialIcons name={icon} size={24} color={themas.Colors.gray} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={themas.Colors.gray}
          keyboardType={numeric ? 'number-pad' : 'default'}
        />
      </View>
    </View>
  );
}
