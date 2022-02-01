import React from 'react';
import { Link } from "react-router-dom";
import MoviesList from '../components/MoviesList';

const Home = () => {
    return (
        <>
            <nav>
                <Link to="/login">Log in</Link>
                <p>or</p>
                <Link to='/signup'>Sign up</Link>
            </nav>

            <br />
            <br />
            <br />

            <main>
                <h1> Movies App </h1>
                <h3> Our movies </h3>

                <MoviesList />
            </main>
            
        </>
    );
};

export default Home;