import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1c1c1c', 
    borderRadius: 5,
    shadowColor: '#ff0000', 
    shadowOpacity: 0.8,
    shadowRadius: 10,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ff0000', 
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  rating: {
    fontSize: 16,
    color: '#ff0000', 
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#bbbbbb', 
  },
});
