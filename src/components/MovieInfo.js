import React from 'react';
import dayjs from 'dayjs';
import ReactStars from 'react-rating-stars-component';

const MovieInfo = ({ movie }) => {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='jumbotron jumbotron-fluid' style={{ width: '100%' }}>
                    <div className='container'>
                        <div className='d-flex flex-column flex-md-row align-items-md-center'>
                            <h1 className='display-4'> {movie.title} </h1>
                            <h3>
                                <span className='badge badge-success ml-2'>{movie.genre}</span>
                            </h3>
                        </div>

                        <h6 className='card-subtitle mb-3 text-muted'>
                            {dayjs(movie.release_date).format('MMM DD, YYYY')}
                        </h6>

                        <div className='d-flex flex-row align-items-center'>
                            <ReactStars count={5} size={24} isHalf={true} edit={false} value={movie.avg_rating} activeColor={'#ffd700'} />
                            <span className='ml-2'>{movie.avg_rating.toFixed(1)}</span>
                        </div>

                        <p className='lead mt-4'> {movie.plot} </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MovieInfo;
