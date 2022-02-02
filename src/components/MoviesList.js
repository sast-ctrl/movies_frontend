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
    } catch (error) {
      alert(`Error getting movies: ${error}`);
    }
  };

  return (
    <div className='row justify-content-start'>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => {
          return (
            <div className='col-12 col md-6 col-lg-4 mb-4' key={movie.id}>
              <MovieCard title={movie.title} releaseDate={movie.release_date} genre={movie.genre} plot={movie.plot} avgRating={movie.avg_rating} slug={movie.slug} withLink />
            </div>
          );
        })}
    </div>
  );
};

export default MoviesList;