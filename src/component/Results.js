import React from "react";
import SingleMovie from "./SingleMovie";
import "../styles/Displays.css";

const Results = (props) => {
  const { moviesList, nominate, nominatedList, term } = props;
  const checkValid = (movie) => {
    for (let item in nominatedList) {
      if (nominatedList[item].imdbID === movie.imdbID) return true;
    }
    return false;
  };

  return (
    <div>
      <h1>Search Results</h1>
      {moviesList && moviesList.length > 0 ? (
        <div>
          <h3>Showing movie results for "{term}"...</h3>
          {moviesList.map((movie) => {
            return (
              <div className="single-movie" key={movie.imdbID}>
                <SingleMovie movie={movie} />
                <button
                  className="results-button"
                  onClick={() => {
                    nominate(movie);
                  }}
                  disabled={checkValid(movie) || nominatedList.length === 5}
                >
                  Nominate
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>No Results Found</h3>
      )}
    </div>
  );
};

export default Results;
