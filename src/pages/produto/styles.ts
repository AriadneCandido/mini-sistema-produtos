import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.Colors.bgScreen,
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 70,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 42,
    gap: 16,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: themas.Colors.black,
  },

  label: {
    fontSize: 17,
    color: themas.Colors.gray,
    marginLeft: 14,
    marginBottom: -9,
    zIndex: 2,
    alignSelf: 'flex-start',
    backgroundColor: themas.Colors.bgScreen,
    paddingHorizontal: 7,
  },

  inputBox: {
    width: '100%',
    height: 72,
    borderWidth: 1.5,
    borderColor: themas.Colors.gray,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 30,
    backgroundColor: themas.Colors.bgScreen,
  },

  inputBoxPrimary: {
    borderColor: themas.Colors.primary,
  },

  input: {
    flex: 1,
    height: '100%',
    marginLeft: 15,
    fontSize: 22,
    color: themas.Colors.black,
  },

  button: {
    width: '100%',
    height: 58,
    backgroundColor: themas.Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 6,
  },

  buttonText: {
    color: themas.Colors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});