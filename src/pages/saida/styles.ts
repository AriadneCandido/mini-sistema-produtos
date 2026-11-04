import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: themas.Colors.bgScreen },
  content: { paddingHorizontal: 24, paddingTop: 45, paddingBottom: 30 },
  button: {
    marginTop: 12, height: 58, backgroundColor: themas.Colors.primary,
    borderRadius: 8, alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18, shadowRadius: 4, elevation: 4,
  },
  buttonText: { color: themas.Colors.secondary, fontSize: 17, fontWeight: 'bold' },
  noteBox: { marginTop: 18, alignItems: 'center' },
  note: { color: themas.Colors.gray, fontSize: 12, textAlign: 'center' },
});
