import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../App';
import MovieCard from './MovieCard';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);
  
  const getMovies = async () => {
    try {
      const result = await axios.get(`${API_URL}/movies`);
      setMovies(result.data);
    } catch(error) {
      alert(`Error getting movies: ${error}`);
    }
  };

  return <div>
    {movies && movies.length > 0 &&
      movies.map((movie) => {
        return <MovieCard key={movie.id} title={movie.title} releaseDate={movie.release_date} genre={movie.genre} />
      })

    }
  </div>;
};

export default MoviesList;