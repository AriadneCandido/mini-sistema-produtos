import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: themas.Colors.bgScreen },
  content: { paddingHorizontal: 24, paddingTop: 45, paddingBottom: 30 },
  summary: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: themas.Colors.lightGray, borderRadius: 12,
    paddingVertical: 17, paddingHorizontal: 20, marginBottom: 24,
  },
  summaryTitle: { fontSize: 16, fontWeight: '600', color: themas.Colors.primary },
  summaryCount: { fontSize: 26, fontWeight: 'bold', color: themas.Colors.primary },
  sectionTitle: { fontSize: 19, fontWeight: 'bold', marginBottom: 14, color: themas.Colors.black },
  note: { textAlign: 'center', color: themas.Colors.gray, fontSize: 12, marginTop: 4 },
});
