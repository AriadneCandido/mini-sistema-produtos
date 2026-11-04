import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import EstoqueCard from '../../components/EstoqueCard';
import { listarProdutosComStatus } from '../../controllers/EstoqueController';
import { styles } from './styles';

export default function ControleEstoque() {
  const produtos = listarProdutosComStatus();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader
        icon="inventory-2"
        title="Controle de Estoque"
        subtitle="Visualize os produtos e as quantidades disponíveis."
      />
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Produtos no inventário</Text>
        <Text style={styles.summaryCount}>{produtos.length}</Text>
      </View>
      <Text style={styles.sectionTitle}>Lista de produtos</Text>

      {produtos.map((produto) => (
        <EstoqueCard key={produto.id} produto={produto} />
))}
</ScrollView>
  );
}
