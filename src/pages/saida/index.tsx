import React from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';
import SelectField from '../../components/SelectField';
import { styles } from './styles';

export default function SaidaProduto() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <PageHeader
        icon="exit-to-app"
        title="Saída de Produto"
        subtitle="Controle a retirada de itens do estoque."
      />
      <FormField label="Nome do Produto" placeholder="Digite o nome do produto" icon="sell" />
      <FormField label="Quantidade de Saída" placeholder="0" icon="remove-circle-outline" numeric />
      <SelectField />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>REGISTRAR SAÍDA</Text>
      </TouchableOpacity>
      </ScrollView>
  );
}
