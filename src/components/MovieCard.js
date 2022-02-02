import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const MovieCard = ({
  title,
  releaseDate,
  genre,
  plot,
  avgRating,
  slug,
  withLink = false,
}) => {
  return (
    <div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">
            {title} <span className="badge badge-success ml-2">{genre}</span>
          </h5>

          <div className="d-flex flex-row align-items-center">
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              edit={false}
              value={avgRating}
              activeColor="#ffd700"
            />
            <span className="ml-2">{avgRating.toFixed(1)}</span>
          </div>
          <h6 className="card-subtitle mt-1 mb-3">
            {dayjs(releaseDate).format("MMM DD, YYYY")}
          </h6>

          <p className="card-text">{plot.substring(0, 100).concat("...")}</p>

          {withLink && (
            <Link to={`/movies/${slug}`} className="card-link">
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
