// AuthTemplate.styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 50, 
    backgroundColor: 'black',
  },
  
  image: {
    width: 250,
    height: 250, 
    marginBottom: 15,
    boderRadius: 200,

  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    maxWidth: '80%',
  },
});
