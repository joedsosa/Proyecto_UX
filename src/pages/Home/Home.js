// Home.js
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import MovieList from '../../components/organisms/MovieList/MovieList';
import { fetchMovies } from '../../../services/api'; // Ajusta la ruta según la estructura de tu proyecto

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data.results); // Assuming the response object has a 'results' property that contains the movies
        setLoading(false);
      } catch (error) {
        console.error('Error loading movies:', error.message);
        setLoading(false);
        // Here you could handle the error differently, like showing an error message in the UI
      }
    };

    loadMovies();
  }, []);

  const handleMoviePress = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  return (
    <MainTemplate>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <MovieList movies={movies} onPress={handleMoviePress} />
      )}
    </MainTemplate>
  );
};

export default Home;
