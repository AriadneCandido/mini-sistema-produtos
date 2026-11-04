import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  field: { marginBottom: 22 },
  label: { fontSize: 15, color: themas.Colors.gray, marginBottom: 9, fontWeight: '600' },
  selector: {
    flexDirection: 'row', alignItems: 'center', height: 58,
    borderWidth: 1.2, borderColor: '#A4BDCC', borderRadius: 9,
    paddingHorizontal: 14, backgroundColor: themas.Colors.secondary,
  },
  selectedText: { flex: 1, marginLeft: 12, fontSize: 16, color: themas.Colors.black },
  optionsBox: {
    marginTop: 3, borderWidth: 1, borderColor: '#A4BDCC',
    borderRadius: 8, overflow: 'hidden',
    backgroundColor: themas.Colors.secondary,
  },
  option: { paddingHorizontal: 18, paddingVertical: 14, borderBottomWidth: 0.5, borderColor: '#D8E3EA' },
  optionText: { fontSize: 16, color: themas.Colors.black },
});
