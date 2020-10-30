import React, { useContext, useEffect } from "react";
import BreweryContext from "../../context/brewery/breweryContext";
import { humanise } from "../../libs/humise";

const BreweryDetails = () => {
  const breweryContext = useContext(BreweryContext);
  const { selectedBrewery, resetSelectedBrewery } = breweryContext;
  const { website_url = "", ...details } = selectedBrewery || {};

  useEffect(() => {
    return () => resetSelectedBrewery();
  }, [resetSelectedBrewery]);

  return (
    <div className='grid-2'>
      {Object.keys(details)
        .filter((field) => !!details[field] && field !== "id")
        .map((field) => (
          <div key={field}>
            <h4> {humanise(field)}:</h4> {details[field]}
          </div>
        ))}
      {website_url && (
        <div>
          <i className='fas fa-external-link-square-alt' />
          <a href={website_url}> website </a>
        </div>
      )}
    </div>
  );
};

export default BreweryDetails;
