import React from 'react';

const BreweryItem = ({ name = '', country = '', website_url = '' }) => (
  <div className='card text-center'>
    <h3> {name} </h3>
    <h4> {country} </h4>
    <div>
      <i className='fas fa-external-link-square-alt' /> <a href={website_url}> website </a>
    </div>
  </div>
);

export default BreweryItem;
