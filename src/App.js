import React from "react";
import "./App.css";
import Search from "./components/Search.js";
import "./styles/App.css";
function App() {
  return (
    <div className="App">
      <div>
        <div className="neon-orange">The</div>
        <div className="neon-blue">Shoppies</div>
        <Search />
      </div>
    </div>
  );
}

export default App;
