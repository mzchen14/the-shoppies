import React from "react";
import SingleMovie from "./SingleMovie";

const Results = (props) => {
  const { moviesList, nominate, nominatedList, term } = props;
  return (
    <div>
      <h1>Search Results</h1>
      {moviesList.length > 0 ? (
        <h3>Showing results for "{term}"...</h3>
      ) : (
        <h3>No Results Found</h3>
      )}
      {moviesList.map((movie) => {
        return (
          <div key={movie.imdbID}>
            <SingleMovie movie={movie} />
            <button
              onClick={() => {
                nominate(movie);
              }}
              disabled={
                nominatedList.includes(movie) || nominatedList.length === 5
              }
            >
              Nominate
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
