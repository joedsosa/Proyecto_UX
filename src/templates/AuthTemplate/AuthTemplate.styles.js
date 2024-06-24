// AuthTemplate.styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 50, // Ajusta este valor según sea necesario para mover el contenido hacia arriba
    backgroundColor: 'black',
  },
  
  image: {
    width: 250, // Ajusta el ancho de la imagen según sea necesario
    height: 250, // Ajusta la altura de la imagen según sea necesario
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
    color: 'white', // Color del mensaje blanco
    textAlign: 'center',
    maxWidth: '80%', // Ajusta el ancho máximo del texto
  },
});
