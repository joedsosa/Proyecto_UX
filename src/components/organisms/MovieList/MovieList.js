import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ActivityIndicator } from 'react-native'; 
import { fetchMovies } from '../../../../services/api';
import MovieCard from '../../molecules/MovieCard/MovieCard';
import styles from './MovieList.styles';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
        setLoading(false); 
      } catch (error) {
        console.error('Error loading movies:', error);
        setLoading(false); 
      }
    };

    loadMovies();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.list}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> 
      ) : movies.length === 0 ? (
        <Text>No movies available</Text> 
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id} 
            title={movie.title}
            rating={movie.vote_average}
            description={movie.overview}
            poster={movie.poster_path}
          />
        ))
      )}
    </ScrollView>
  );
};

export default MovieList;
