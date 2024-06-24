import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  signOutButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  signOutButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
