import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: themas.Colors.secondary,
    borderRadius: 12, padding: 18, marginBottom: 14,
    borderWidth: 1, borderColor: '#DCE6EC',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05, shadowRadius: 4, elevation: 2,
  },
  topRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 16 },
  nome: { fontWeight: 'bold', fontSize: 17, color: themas.Colors.black, flex: 1 },
  bottomRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  smallLabel: { fontSize: 12, color: themas.Colors.gray },
  quantidade: { marginTop: 4, fontWeight: '600', fontSize: 16, color: themas.Colors.black },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 7, borderRadius: 20 },
  statusNormal: { backgroundColor: '#E1F3E6' },
  statusBaixo: { backgroundColor: '#FFF0D6' },
  statusText: { fontSize: 11, fontWeight: 'bold' },
  textNormal: { color: '#226E3D' },
  textBaixo: { color: '#996000' },
});
