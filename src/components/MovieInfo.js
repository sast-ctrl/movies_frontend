import React from 'react';

const MovieInfo = ({ movie }) => {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='jumbotron jumbotron-fluid'>
                    <div className='container'>
                        <h1 className='display-2'> {movie.title} </h1>
                        <p className='lead mt-4'> {movie.plot} </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MovieInfo;
