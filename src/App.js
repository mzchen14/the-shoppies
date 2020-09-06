import React from "react";
import "./App.css";
import Search from "./components/Search.js";
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
        <Search />
      </div>
    </div>
  );
}

export default App;
