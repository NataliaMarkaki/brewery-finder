import { SET_LOADING, SET_BREWERIES } from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_BREWERIES:
      return {
        ...state,
        breweries: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
