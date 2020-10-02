import React, { useState, useLayoutEffect } from 'react';
import BreweryItem from './BreweryItem';
import { getBreweries } from './../../api/brewery';

const Breweries = () => {
  const [ breweries, setBreweries ] = useState([]);
  useLayoutEffect(() => {
    const loadBreweries = async () => {
      const result = await getBreweries();
      setBreweries(result);
    };
    loadBreweries();
  }, []);
  return <div style={breweryStyle}>{breweries.map((brewery, idx) => <BreweryItem key={idx} {...brewery} />)}</div>;
};

const breweryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Breweries;
