import * as actionTypes from "./actionTypes";

export const fetchCurrencies = filter => {
  return {
    type: actionTypes.FETCH_CURRENCIES,
    filter
  };
};
