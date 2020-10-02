import React from 'react';

const Navbar = (icon = 'fab fa-beer') => (
  <nav className='navbar bg-primary'>
    <h1>
      <i className={icon} /> Brewery Finder
    </h1>
  </nav>
);

export default Navbar;
