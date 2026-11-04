import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 30 },
  iconBox: {
    height: 56, width: 56, borderRadius: 14,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: themas.Colors.lightGray,
  },
  textBox: { flex: 1 },
  title: { fontSize: 27, fontWeight: 'bold', color: themas.Colors.black },
  subtitle: { fontSize: 13, color: themas.Colors.gray, marginTop: 3, lineHeight: 18 },
});
