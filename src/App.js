import React from "react";
import "./App.css";
import Search from "./component/Search.js";
import "./styles/App.css";
import "typeface-roboto";
function App() {
  return (
    <div className="App">
      <div>
        <div className="title">
          <div className="neon-orange">The</div>
          <div className="neon-blue">Shoppies</div>
        </div>
        <div className="text">
          <div className="sub-text">
            <p>Welcome to The Shoppies: Shopify's very own movie award show!</p>
            <p>
              To begin nominating your favorite movies, please search for a
              movie.
            </p>
          </div>
          <p className="note">
            Please note: You may nominate a maximum of 5 movies.
          </p>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default App;
