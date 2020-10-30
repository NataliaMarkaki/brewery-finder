import React, { useReducer } from "react";
import BreweryContext from "./breweryContext";
import BreweryReducer from "./breweryReducer";
import {
  SET_LOADING,
  SET_BREWERIES,
  SET_SELECTED_BREWERY,
  RESET_SELECTED_BREWERY,
} from "./types";
import { getBreweries } from "./../../api/brewery";

const BreweryState = (props) => {
  const initialState = {
    breweries: [],
    selectedBrewery: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(BreweryReducer, initialState);

  const fetchBreweries = async () => {
    setLoading(true);

    const result = await getBreweries();

    dispatch({
      type: SET_BREWERIES,
      payload: result,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  const setSelectedBrewery = (payload) =>
    dispatch({ type: SET_SELECTED_BREWERY, payload });
  const resetSelectedBrewery = () => dispatch({ type: RESET_SELECTED_BREWERY });

  return (
    <BreweryContext.Provider
      value={{
        breweries: state.breweries,
        selectedBrewery: state.selectedBrewery,
        loading: state.loading,
        fetchBreweries,
        setSelectedBrewery,
        resetSelectedBrewery,
      }}
    >
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryState;
