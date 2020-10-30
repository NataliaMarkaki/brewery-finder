import {
  SET_LOADING,
  SET_BREWERIES,
  SET_SELECTED_BREWERY,
  RESET_SELECTED_BREWERY,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_BREWERIES:
      return {
        ...state,
        breweries: action.payload,
        loading: false,
      };

    case SET_SELECTED_BREWERY:
      return {
        ...state,
        selectedBrewery: state.breweries.find(
          (brewery) => String(brewery.id) === action.payload
        ),
      };

    case RESET_SELECTED_BREWERY:
      return {
        ...state,
        selectedBrewery: null,
      };

    default:
      return state;
  }
};
