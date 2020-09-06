import React from "react";
const SingleMovie = (props) => {
  const { movie } = props;
  return (
    <div className="each-movie">
      {movie.Title} ({movie.Year})
    </div>
  );
};
export default SingleMovie;
