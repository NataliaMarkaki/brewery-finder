import React, { useState } from 'react';
import BreweryItem from './BreweryItem';

const Breweries = () => {
  const [ breweries ] = useState([]);
  return <div style={breweryStyle}>{breweries.map((brewery, idx) => <BreweryItem key={idx} brewery={brewery} />)}</div>;
};

const breweryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Breweries;
