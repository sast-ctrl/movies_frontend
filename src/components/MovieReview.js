import React from "react";
import ReactStars from "react-rating-stars-component";
import dayjs from "dayjs";

const MovieReview = ({ rating }) => {
  return (
    <div
      className="jumbotron jumbotron-fluid review-jumbotron"
      style={{ width: "100%" }}
    >
      <div className="container">
        <h5 className="display-5"> {rating.author.username} </h5>
        <h6 className="card-subtitle mb-3">
          {dayjs(rating.created_at).format("MMM DD, YYYY")}
        </h6>
        <div className="d-flex flex-row align-items-center">
          <ReactStars
            count={5}
            size={24}
            isHalf={true}
            edit={false}
            value={rating.rating.toFixed(1)}
            activeColor="#ffd700"
          />
          <span className="ml-2">{rating.rating.toFixed(1)}</span>
        </div>
        <p className="mt-3 mb-1">{rating.comment}</p>
      </div>
    </div>
  );
};

export default MovieReview;
