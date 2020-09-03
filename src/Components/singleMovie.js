import React from "react";

const SingleMovie = (props) => {
  const { movie } = props;
  return (
    <div>
      {/* <img src={movie.Poster} height="100px" alt="poster"></img> */}
      {movie.Title} ({movie.Year})
    </div>
  );
};

export default SingleMovie;
