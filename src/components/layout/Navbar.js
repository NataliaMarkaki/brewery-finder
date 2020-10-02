import React from 'react';

const Navbar = ({ title = 'Brewery Finder', icon = 'fas fa-beer' }) => (
  <nav className='navbar bg-primary'>
    <h1>
      <i className={icon} /> {title}
    </h1>
  </nav>
);

export default Navbar;
