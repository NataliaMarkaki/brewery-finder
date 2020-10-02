import React from 'react';
import Navbar from './components/layout/Navbar';
import Breweries from './components/breweries/Breweries';
import './App.css';

const App = () => (
  <div className='App'>
    <Navbar />
    <div className='container'>
      <Breweries />
    </div>
  </div>
);

export default App;
