import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Breweries from "./breweries/Breweries";
import BreweryDetails from "./breweries/BreweryDetails";
import BreweryState from "../context/brewery/BreweryState";
import "./App.css";

const App = () => (
  <Router>
    <BreweryState>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Breweries />
            </Route>
            <Route path='/brewery'>
              <BreweryDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </BreweryState>
  </Router>
);

export default App;
