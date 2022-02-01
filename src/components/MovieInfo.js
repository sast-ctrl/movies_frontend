import React from 'react';

const MovieInfo = ( {movie} ) => {
    return (
        <div className='jumbotron jumbotron-fluid'>
            <div className='container'>
                <h1 className='display-2'> {movie.title} </h1>
                <p className='lead'> {movie.plot} </p>
            </div>
        </div>
    );
};

export default MovieInfo;
