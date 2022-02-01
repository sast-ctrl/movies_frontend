import React from 'react';

import MoviesList from '../components/MoviesList';

const Details = () => {
    return (
        <>
            <br />

            <main>
                <div className='jumbotron jumbotron-fluid'>
                    <div className='container'>
                        <h1 className='display-2'> Movies App </h1>
                        <p className='lead'> Movies App is the world's most popular source for movie content. Find ratings and reviews for the newest movies. </p>
                    </div>
                </div>

                <MoviesList />
            </main>

        </>
    );
};

export default Home;