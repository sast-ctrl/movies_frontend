import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../App';
import MovieReview from './MovieReview';
import MovieInfo from './MovieInfo';

// Temporary
import ReactStars from 'react-rating-stars-component';


const MovieDetails = ({ slug }) => {
    const [movie, setMovie] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        getMovies();

        if (localStorage.getItem('jwt-token')) setIsAuth(true);
    }, []);

    const getMovies = async () => {
        try {
            const config = {
                headers: {
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
                        {/* movie info */}
                        <MovieInfo movie={movie}/>
                        {isAuth && <p>Logged</p>}
                        {/* For testing purposes only */}
                        {!isAuth && (
                            <>
                                <div className='row'>
                                    <div className='col-12 mb-4'>
                                        <h3>Add a review</h3>
                                        <form>
                                            <div className='form-group d-flex justify-content-end'>
                                                <ReactStars onChange={''} count={5} size={30} isHalf={false} edit={true} activeColor='#ffd700' />
                                            </div>

                                            <div className='form-group'>
                                                <textarea onChange={''} className='form-control' rows={'8'} required />
                                            </div>

                                            <button type='submit' className='btn btn-primary'>
                                                Save
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </>
                        )}


                        <h2>Reviews</h2>

                        {movie.ratings && movie.ratings.length > 0 &&
                            movie.ratings.map((rating) => {
                                return <MovieReview key={rating.id} rating={rating} />
                            })}
                    </>
                )
            }
        </div>
    );
};

export default MovieDetails;