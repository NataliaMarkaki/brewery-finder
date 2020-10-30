import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BreweryContext from "../../context/brewery/breweryContext";
import { humanise } from "../../libs/humise";

const BreweryDetails = () => {
  const breweryContext = useContext(BreweryContext);
  const {
    selectedBrewery,
    resetSelectedBrewery,
    fetchBreweries,
  } = breweryContext;
  const { id } = useParams();
  const { website_url = "", ...details } = selectedBrewery || {};

  useEffect(() => {
    if (!selectedBrewery) {
      fetchBreweries({ selectedBrewery: id });
    }
    return () => resetSelectedBrewery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !!selectedBrewery && (
      <div className='grid-2'>
        {Object.keys(details)
          .filter((field) => !!details[field] && field !== "id")
          .map((field) => (
            <div key={field}>
              <h4> {humanise(field)}:</h4> {details[field]}
            </div>
          ))}

        <div>
          <i className='fas fa-external-link-square-alt' />
          <a href={website_url}> website </a>
        </div>
      </div>
    )
  );
};

export default BreweryDetails;
