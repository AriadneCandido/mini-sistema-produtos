import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  field: { marginBottom: 22 },
  label: { fontSize: 15, color: themas.Colors.gray, marginBottom: 9, fontWeight: '600' },
  inputBox: {
    flexDirection: 'row', alignItems: 'center', height: 58,
    borderWidth: 1.2, borderColor: '#A4BDCC', borderRadius: 9,
    paddingHorizontal: 14, backgroundColor: themas.Colors.secondary,
  },
  input: { flex: 1, marginLeft: 12, fontSize: 16, color: themas.Colors.black },
});
