import React from "react";
import SingleMovie from "./SingleMovie";
import "../styles/Displays.css";

const Nominations = (props) => {
  const { nominationList, remove } = props;
  return (
    <div>
      <h1>Your Nominations</h1>
      {nominationList.map((movie) => {
        return (
          <div className="single-movie" key={movie.imdbID}>
            <SingleMovie movie={movie} />
            <button
              className="nominations-button"
              onClick={() => remove(movie)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Nominations;
