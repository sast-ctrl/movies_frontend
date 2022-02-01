import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../App';
import dayjs from 'dayjs';
import ReactStars from 'react-rating-stars-component';


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

                        {movie.ratings && movie.ratings.length > 0 &&
                            movie.ratings.map((rating) => {
                                return (
                                    <div className="jumbotron jumbotron-fluid" style={{ width: '100%' }}>
                                        <div className="container">
                                            <h6 className="display-5"> {rating.author.username} </h6>
                                            <h7 className='card-subtitle mb-3 text-muted'>
                                                {dayjs(rating.created_at).format('MMM DD, YYYY')}
                                            </h7>
                                            <div className='d-flex flex-row align-items-center'>
                                                <ReactStars count={5} size={24} isHalf={true} edit={false} value={rating.rating.toFixed(1)} activeColor='#ffd700' />
                                                <span className='ml-2'>{rating.rating.toFixed(1)}</span>
                                            </div>
                                            <p className="lead my-4">{rating.comment}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </>
                )
            }
        </div>
    );
};

export default MovieDetails;