import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title = "Brewery Finder", icon = "fas fa-beer" }) => (
  <nav className='navbar bg-primary'>
    <h1>
      <Link to='/'>
        <i className={icon} /> {title}
      </Link>
    </h1>
  </nav>
);

export default Navbar;
