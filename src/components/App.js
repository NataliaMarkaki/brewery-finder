import React from 'react';
import Navbar from './layout/Navbar';
import Breweries from './breweries/Breweries';
import BreweryState from '../context/brewery/BreweryState';
import './App.css';

const App = () => (
  <BreweryState>
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Breweries />
      </div>
    </div>
  </BreweryState>
);

export default App;
