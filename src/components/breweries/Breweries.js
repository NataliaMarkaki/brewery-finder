import React, { useContext, useEffect } from 'react';
import BreweryItem from './BreweryItem';
import BreweryContext from '../../context/brewery/breweryContext';

const Breweries = () => {
  const breweryContext = useContext(BreweryContext);
  const { breweries, loading, fetchBreweries } = breweryContext;

  useEffect(() => {
    fetchBreweries();
    // eslint-disable-next-line
  }, []);

  return (
    !loading && (
      <div style={breweryStyle}>{breweries.map((brewery, idx) => <BreweryItem key={idx} {...brewery} />)}</div>
    )
  );
};

const breweryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Breweries;
