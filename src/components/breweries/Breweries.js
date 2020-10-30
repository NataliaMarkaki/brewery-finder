import React, { useContext, useEffect } from "react";
import BreweryItem from "./BreweryItem";
import BreweryContext from "../../context/brewery/breweryContext";
import Spinner from "../layout/Spinner";

const Breweries = () => {
  const breweryContext = useContext(BreweryContext);
  const { breweries, loading, fetchBreweries } = breweryContext;

  useEffect(() => {
    fetchBreweries();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div style={breweryStyle}>
      {breweries.map((brewery, idx) => (
        <BreweryItem key={idx} name={brewery.name} id={brewery.id} />
      ))}
    </div>
  );
};

const breweryStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Breweries;
