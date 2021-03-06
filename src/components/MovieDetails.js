import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../App";
import MovieReview from "./MovieReview";
import MovieInfo from "./MovieInfo";
import RatingMovie from "./RatingMovie";

const MovieDetails = ({ slug }) => {
  const [movie, setMovie] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    getMovies();

    if (localStorage.getItem("jwt-token")) setIsAuth(true);
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
    <>
      {movie && (
        <>
          <MovieInfo movie={movie} />

          {isAuth && <RatingMovie movie={movie} getMovie={getMovies} />}

          <div className="row">
            <div className="col-12">
              {movie.ratings && movie.ratings.length > 0 ? (
                <>
                  <h2>Reviews</h2>

                  {movie.ratings.map((rating) => {
                    return <MovieReview key={rating.id} rating={rating} />;
                  })}
                </>
              ) : (
                <div
                  className="alert alert-warning"
                  role={"alert"}
                  style={{ width: "100%" }}
                >
                  There are no reviews
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
