import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../App';
import MovieReview from './MovieReview';


const MovieDetails = ({ slug }) => {
    const [movie, setMovie] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        getMovies();

        if( localStorage.getItem('jwt-token') ) setIsAuth(true);
    }, []);

    const getMovies = async () => {
        try {
            const config = {
                headers:{
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('jwt-token')}`
                }
            }
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

                        {isAuth && <p>Logged</p>}
                        {!isAuth && <p>Not Logged</p>}
                        

                        <h2>Reviews</h2>

                        {movie.ratings && movie.ratings.length > 0 &&
                            movie.ratings.map((rating) => {
                                return <MovieReview key={rating.id} rating={rating}/>
                            })}
                    </>
                )
            }
        </div>
    );
};

export default MovieDetails;