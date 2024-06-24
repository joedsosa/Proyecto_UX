import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './MovieCard.styles';
import defaultPoster from './defaultPoster.jpeg';
import { fetchMovieVideos } from '../../../../services/api'; // Ajusta la ruta según la estructura de tu proyecto

const MovieCard = ({ id, title, rating, description, poster }) => {
  const navigation = useNavigation();
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  const posterUrl = poster ? `${baseImageUrl}${poster}` : defaultPoster;

  const handlePress = async () => {
    try {
      // Llama a la función fetchMovieVideos para obtener los videos de la película por su ID
      const videos = await fetchMovieVideos(id);
      
      // Filtra los videos para encontrar el trailer de YouTube
      const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');

      if (trailer) {
        // Si se encontró un trailer, obtén la URL de YouTube y navega a la pantalla de VideoPlayer
        const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
        navigation.navigate('VideoPlayer', { videoUrl: trailerUrl });
      } else {
        // Si no se encontró ningún trailer, muestra un mensaje de advertencia
        Alert.alert('No Trailer Available', 'Sorry, there is no trailer available for this movie.');
      }
    } catch (error) {
      // Maneja los errores al obtener los videos de la película
      console.error('Error fetching movie videos:', error);
      Alert.alert('Error', 'Failed to fetch movie videos. Please try again later.');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image
        source={{ uri: posterUrl }}
        style={styles.image}
        resizeMode="cover"
        onError={(e) => {
          console.warn('Failed to load image:', e.nativeEvent.error);
        }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>Rating: {rating}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
