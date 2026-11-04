import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ProdutoComStatus } from '../../controllers/EstoqueController';
import { styles } from './styles';

type Props = { produto: ProdutoComStatus };

export default function EstoqueCard({ produto }: Props) {
  const baixo = produto.status === 'Estoque Baixo';
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <MaterialIcons name="inventory-2" size={22} color="#287BB7" />
        <Text style={styles.nome}>{produto.nome}</Text>
      </View>
      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.smallLabel}>Quantidade disponível</Text>
          <Text style={styles.quantidade}>{produto.quantidade} unidades</Text>
        </View>
        <View style={[styles.statusBadge, baixo ? styles.statusBaixo : styles.statusNormal]}>
          <Text style={[styles.statusText, baixo ? styles.textBaixo : styles.textNormal]}>
            {produto.status}
          </Text>
        </View>
      </View>
    </View>
  );
}
