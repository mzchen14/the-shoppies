import React, { Component } from "react";
import Nominations from "./Nominations";
import Results from "./Results";
import Banner from "./Banner";
import API from "../API";
import "../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      currentTerm: "",
      moviesList: [],
      nominatedList: [],
      seen: false,
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNominate = this.handleNominate.bind(this);
    this.removeNomination = this.removeNomination.bind(this);
    this.toggleBanner = this.toggleBanner.bind(this);
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({
      ...this.state,
      loading: true,
    });
    try {
      let movieData = await API.get(
        `"${this.state.search}"&apikey=${process.env.REACT_APP_API_KEY}`
      );
      setTimeout(
        () =>
          this.setState({
            ...this.state,
            moviesList: movieData.data.Search,
            currentTerm: this.state.search,
            loading: false,
          }),
        1000
      );
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (evt) => {
    this.setState({
      ...this.state,
      search: evt.target.value,
    });
  };

  handleNominate = (movie) => {
    let count = this.state.nominatedList.length;
    if (count === 4) {
      this.setState({
        ...this.state,
        nominatedList: [...this.state.nominatedList, movie],
        seen: !this.state.seen,
      });
    } else {
      this.setState({
        ...this.state,
        nominatedList: [...this.state.nominatedList, movie],
      });
    }
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

  toggleBanner = () => {
    this.setState({
      ...this.state,
      seen: !this.state.seen,
    });
  };
  render() {
    return (
      <div>
        {this.state.seen ? <Banner toggle={this.toggleBanner} /> : null}
        <Grid item xs={12} className="search-bar">
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Enter movie title"
              value={this.state.search}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={!this.state.search}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </Grid>
        <Grid container spacing={2} className="container">
          <Grid item xs={6}>
            <div className="box">
              {this.state.loading ? (
                <Loader
                  className="loader"
                  type="TailSpin"
                  color="white"
                  height={100}
                  width={100}
                  timeout={1000}
                />
              ) : (
                <Results
                  moviesList={this.state.moviesList}
                  nominate={this.handleNominate}
                  nominatedList={this.state.nominatedList}
                  term={this.state.currentTerm}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="box">
              <Nominations
                remove={this.removeNomination}
                nominationList={this.state.nominatedList}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Search;
