import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./Pokemon";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Pokemon />
      </header>
    </div>
  );
};

export default App;
