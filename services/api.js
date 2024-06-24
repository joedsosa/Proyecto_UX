import { TMDB_API_URL, TMDB_API_KEY } from '@env';

const API_URL = TMDB_API_URL;
const API_KEY = TMDB_API_KEY;

export const fetchMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    throw error;
  }
};

export const fetchMovieVideos = async (movieId) => {
  if (!movieId) {
    throw new Error('No se proporcionó el ID de la película');
  }

  try {
    const response = await fetch(`${API_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Error al obtener videos de la película');
    }
    const data = await response.json();
    const videos = data.results.map(video => ({
      id: video.id,
      key: video.key,
      site: video.site,
      type: video.type,
    }));
    return videos;
  } catch (error) {
    throw new Error('Error al obtener videos de la película: ' + error.message);
  }
};
