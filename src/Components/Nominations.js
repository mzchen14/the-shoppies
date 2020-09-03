import React from "react";
import SingleMovie from "./SingleMovie";

const Nominations = (props) => {
  const { nominationList, remove } = props;
  return (
    <div>
      <h1>Your Nominations</h1>
      {nominationList.map((movie) => {
        return (
          <div key={movie.imdbID}>
            <SingleMovie movie={movie} />
            <button onClick={() => remove(movie)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Nominations;
