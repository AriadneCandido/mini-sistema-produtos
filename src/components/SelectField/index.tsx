import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { themas } from '../../global/themes';

const opcoes = ['Venda', 'Avarias', 'Uso Interno'] as const;

export default function SelectField() {
  const [aberto, setAberto] = useState(false);
  const [motivo, setMotivo] = useState<string>('Selecione o motivo');

  return (
    <View style={styles.field}>
      <Text style={styles.label}>Motivo da Retirada</Text>
      <TouchableOpacity
        onPress={() => setAberto(!aberto)}
        style={styles.selector}
        activeOpacity={0.8}
        accessibilityRole="button"
      >
        <MaterialIcons name="assignment" size={24} color={themas.Colors.gray} />
        <Text style={styles.selectedText}>{motivo}</Text>
        <MaterialIcons
          name={aberto ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={28}
          color={themas.Colors.gray}
        />
      </TouchableOpacity>
      {aberto && (
        <View style={styles.optionsBox}>
          {opcoes.map((opcao) => (
            <TouchableOpacity
              key={opcao}
              style={styles.option}
              onPress={() => {
                setMotivo(opcao);
                setAberto(false);
              }}
            >
              <Text style={styles.optionText}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
