import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  tabArea: {
    flexDirection: 'row',
    minHeight: 68,
    paddingTop: 7,
    backgroundColor: themas.Colors.secondary,
    borderTopColor: '#D8E3EA',
    borderTopWidth: 1,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 5,
  },
  tabText: {
    fontWeight: '600',
    fontSize: 12,
  },
  activeLine: {
    backgroundColor: themas.Colors.primary,
    width: 28,
    height: 3,
    borderRadius: 3,
    marginTop: 2,
  },
});
