import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import About from "./About";
import Home from "./Home";
const App = () => {
  return (
    <Router>
      <nav>
        <div className="logo"></div>
        <ul>
          <li className="home">
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link exact to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
