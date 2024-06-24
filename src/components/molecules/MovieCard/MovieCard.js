import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './MovieCard.styles';
import defaultPoster from './defaultPoster.jpeg';
import { fetchMovieVideos } from '../../../../services/api';
const MovieCard = ({ id, title, rating, description, poster }) => {
  const navigation = useNavigation();
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  const posterUrl = poster ? `${baseImageUrl}${poster}` : defaultPoster;

  const handlePress = async () => {
    try {
      const videos = await fetchMovieVideos(id);
      const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      if (trailer) {
        const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
        navigation.navigate('VideoPlayer', { videoUrl: trailerUrl });
      } else {
        Alert.alert('No Trailer Available', 'Sorry, there is no trailer available for this movie.');
      }
    } catch (error) {
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
