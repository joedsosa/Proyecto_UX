// Home.js
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import MovieList from '../../components/organisms/MovieList/MovieList';
import { fetchMovies } from '../../../services/api'; 

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data.results); 
        setLoading(false);
      } catch (error) {
        console.error('Error loading movies:', error.message);
        setLoading(false);
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
