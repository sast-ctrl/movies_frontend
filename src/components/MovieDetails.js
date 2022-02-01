import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../App';


const MovieDetails = ({ slug }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            const result = await axios.get(`${API_URL}/movies/${slug}`);
            setMovie(result.data);
        } catch (error) {
            alert(`Error getting movies: ${error}`);
        }
    };

    return (
        <div className='row justify-content-center'>
            {movie &&
                (
                    <>
                        <div className='jumbotron jumbotron-fluid'>
                            <div className='container'>
                                <h1 className='display-2'> {movie.title} </h1>
                                <p className='lead'> {movie.plot} </p>
                            </div>
                        </div>
                        <h2>Reviews</h2>

                        {movie.ratings && movie.ratings.length > 0}
                    </>
                )
            }
        </div>
    );
};

export default MovieDetails;