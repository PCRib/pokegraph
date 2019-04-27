import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RegionPage from "./components/RegionPage/RegionPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <header className="App-header" /> */}
        <Switch>
          <Route path="/" exact component={MainDash} />
          <Route path="/regions/:name" component={RegionPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
