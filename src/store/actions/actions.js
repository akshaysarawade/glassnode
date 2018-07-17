import * as actionTypes from "./actionTypes";

/**
 * fetch currency data from API
 * it takes param as the row count
 * @param {*} filter
 */
export const fetchCurrencies = filter => {
  return {
    type: actionTypes.FETCH_CURRENCIES,
    filter
  };
};

/**
 * to set row count in state
 * @param {*} rowCount
 */
export const setRowCount = rowCount => {
  return {
    type: actionTypes.SET_ROW_COUNT,
    rowCount
  };
};
