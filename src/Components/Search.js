import React, { Component } from "react";
import singleMovie from "./singleMovie";
import API from "../API";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      moviesList: [],
      nominatedList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNominate = this.handleNominate.bind(this);
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let movieData = await API.get(
        `"${this.state.search}"&apikey=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        ...this.state,
        moviesList: movieData.data.Search,
      });
      console.log(movieData);
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (evt) => {
    this.setState({
      ...this.state,
      search: evt.target.value,
    });
    console.log(this.state);
  };

  handleNominate = (movie) => {
    if (this.state.nominatedList.length == 5) {
      alert("You've Nomianted 5 Movies, Thank you!");
    } else {
      this.setState({
        ...this.state,
        nominatedList: [...this.state.nominatedList, movie],
      });
      console.log(movie);
      console.log(`${movie.Title} was nominated!`);
    }
  };

  render() {
    return (
      <div>
        This is the search bar
        <div className="search-bar">
          <input
            placeholder="Enter movie title"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Search
          </button>
        </div>
        <div className="movie-list">
          <ul>
            <h1>List of Movies</h1>
            {this.state.moviesList.map((movie) => {
              return (
                <div key={movie.imdbID}>
                  <img src={movie.Poster} alt="poster"></img>
                  {movie.Title} ({movie.Year})
                  <button
                    onClick={() => {
                      this.handleNominate(movie);
                    }}
                  >
                    Nominate
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
