import React, { Component } from "react";
import Nominations from "./Nominations";
import Results from "./Results";
import API from "../API";
import "../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      currentTerm: "",
      moviesList: [],
      nominatedList: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNominate = this.handleNominate.bind(this);
    this.removeNomination = this.removeNomination.bind(this);
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
        currentTerm: this.state.search,
      });
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
    this.setState({
      ...this.state,
      nominatedList: [...this.state.nominatedList, movie],
    });
    // if (this.state.nominatedList.length === 5) {
    //   alert("You've Nomianted 5 Movies, Thank you!");
    // }
  };

  removeNomination = (movie) => {
    let newList = this.state.nominatedList.filter(
      (element) => element !== movie
    );
    this.setState({
      ...this.state,
      nominatedList: newList,
    });
  };

  render() {
    return (
      <div>
        <div className="search-bar">
          <input
            placeholder="Enter movie title"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="container">
          <div className="movie-list">
            <Results
              moviesList={this.state.moviesList}
              nominate={this.handleNominate}
              nominatedList={this.state.nominatedList}
              term={this.state.currentTerm}
            />
          </div>
          <div>
            <Nominations
              remove={this.removeNomination}
              nominationList={this.state.nominatedList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
