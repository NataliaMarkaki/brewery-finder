import React from 'react';
// import { Link } from 'react-router-dom';

const BreweryItem = ({ name = '', country = '', website = '' } = {}) => (
  <div className='card text-center'>
    <h3> {name} </h3>
    <h4> {country} </h4>
    <div>
      {/* <Link to={website} className='btn btn-dark btn-sm my-1'>
        More on website
      </Link> */}
    </div>
  </div>
);

export default BreweryItem;
