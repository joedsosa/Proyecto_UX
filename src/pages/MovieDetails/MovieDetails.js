// MovieDetailsScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import styles from './MovieDetails.styles';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <MainTemplate>
      <View style={styles.container}>
        <Image source={{ uri: movie.poster }} style={styles.poster} />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.rating}>Rating: {movie.rating}</Text>
        <Text style={styles.description}>{movie.description}</Text>
      </View>
    </MainTemplate>
  );
};

export default MovieDetailsScreen;
