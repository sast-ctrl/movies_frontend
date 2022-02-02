import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

const Details = () => {
  const { slug } = useParams();

  return (
    <>
      <main>{slug && <MovieDetails slug={slug} />}</main>
    </>
  );
};

export default Details;
