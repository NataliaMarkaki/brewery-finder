import React, { useReducer } from 'react';
import BreweryContext from './breweryContext';
import BreweryReducer from './breweryReducer';
import { SET_LOADING, SET_BREWERIES } from './types';
import { getBreweries } from './../../api/brewery';

const BreweryState = (props) => {
  const initialState = {
    breweries: [],
    loading: false
  };

  const [ state, dispatch ] = useReducer(BreweryReducer, initialState);

  const fetchBreweries = async () => {
    setLoading(true);

    const result = await getBreweries();

    dispatch({
      type: SET_BREWERIES,
      payload: result
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BreweryContext.Provider
      value={{
        breweries: state.breweries,
        loading: state.loading,
        fetchBreweries
      }}
    >
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryState;
