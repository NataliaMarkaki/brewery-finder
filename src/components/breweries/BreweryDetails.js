import React, { useContext } from "react";
import BreweryContext from "../../context/brewery/breweryContext";

const BreweryDetails = () => {
  const breweryContext = useContext(BreweryContext);
  const {
    selectedBrewery: { id, website_url, ...details },
  } = breweryContext;
  const humaniseBreweryData = (field) =>
    field
      .replace(/^[\s_]+|[\s_]+$/g, "")
      .replace(/[_\s]+/g, " ")
      .replace(/^[a-z]/, (m) => m.toUpperCase());
  return (
    <div className='grid-2r'>
      {Object.keys(details)
        .filter((field) => !!details[field])
        .map((field) => (
          <div key={field}>
            <h4> {humaniseBreweryData(field)}:</h4> {details[field]}
          </div>
        ))}
      <div>
        <i className='fas fa-external-link-square-alt' />
        <a href={website_url}> website </a>
      </div>
    </div>
  );
};

export default BreweryDetails;
