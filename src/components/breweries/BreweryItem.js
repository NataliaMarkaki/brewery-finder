import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BreweryContext from "../../context/brewery/breweryContext";

const BreweryItem = ({ name = "", id }) => {
  const breweryContext = useContext(BreweryContext);
  const { setSelectedBrewery } = breweryContext;
  return (
    <div className='card text-center'>
      <h3> {name} </h3>

      <div>
        <Link to='/brewery' onClick={() => setSelectedBrewery(id)}>
          ...more
        </Link>
      </div>
    </div>
  );
};

export default BreweryItem;
