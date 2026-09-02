import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { themas } from '../../global/themes';

export default function Produto() {

  function cadastrarProduto() {
    Alert.alert(
      'Produto cadastrado!',
      'Dados registrados com sucesso.'
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <View style={styles.content}>

        <View style={styles.header}>

          <MaterialIcons
            name="inventory-2"
            size={52}
            color={themas.Colors.primary}
          />

          <Text style={styles.title}>
            Novo Produto
          </Text>

        </View>


        <Text style={styles.label}>
          Nome
        </Text>

        <View
          style={[
            styles.inputBox,
            styles.inputBoxPrimary
          ]}
        >

          <MaterialIcons
            name="sell"
            size={28}
            color={themas.Colors.gray}
          />

          <TextInput
            style={styles.input}
            placeholder="Nome do Produto"
            placeholderTextColor={themas.Colors.gray}
          />

        </View>


        <Text style={styles.label}>
          Preço
        </Text>

        <View style={styles.inputBox}>

          <MaterialIcons
            name="attach-money"
            size={30}
            color={themas.Colors.gray}
          />

          <TextInput
            style={styles.input}
            placeholder="R$ 0,00"
            placeholderTextColor={themas.Colors.gray}
            keyboardType="decimal-pad"
          />

        </View>


        <Text style={styles.label}>
          Quantidade de Entrada
        </Text>

        <View
          style={[
            styles.inputBox,
            styles.inputBoxPrimary
          ]}
        >

          <MaterialIcons
            name="inventory"
            size={28}
            color={themas.Colors.gray}
          />

          <TextInput
            style={styles.input}
            placeholder="0"
            placeholderTextColor={themas.Colors.gray}
            keyboardType="number-pad"
          />

        </View>


        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={cadastrarProduto}
        >

          <Text style={styles.buttonText}>
            CADASTRAR PRODUTO
          </Text>

        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}