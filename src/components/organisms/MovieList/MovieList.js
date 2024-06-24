// MovieList.js
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, ActivityIndicator } from 'react-native'; // Import ActivityIndicator for loading state
import { fetchMovies } from '../../../../services/api';
import MovieCard from '../../molecules/MovieCard/MovieCard';
import styles from './MovieList.styles';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
        setLoading(false); // Set loading to false once movies are loaded
      } catch (error) {
        console.error('Error loading movies:', error);
        setLoading(false); // Ensure loading state is set to false on error
      }
    };

    loadMovies();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.list}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> // Show loading indicator while fetching movies
      ) : movies.length === 0 ? (
        <Text>No movies available</Text> // Display message if no movies are fetched
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id} // Pass the movie id to MovieCard
            title={movie.title}
            rating={movie.vote_average} // Assuming vote_average is the rating field
            description={movie.overview}
            poster={movie.poster_path}
          />
        ))
      )}
    </ScrollView>
  );
};

export default MovieList;
