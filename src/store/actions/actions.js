import * as actionTypes from "./actionTypes";

/**
 * fetch currency data from API
 * rowCount is the record count
 * @param {*} rowCount
 */
export const fetchCurrencies = rowCount => {
  return {
    type: actionTypes.FETCH_CURRENCIES,
    rowCount
  };
};

/**
 * update the currencies data, fetched from the API in the surrencyReducer
 * @param {*} data
 */
export const updateCurrencies = data => {
  return {
    type: actionTypes.UPDATE_CURRENCIES,
    data
  }
}

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

export const toggleLoader = data => {
  return {
    type: actionTypes.TOGGLE_LOADER,
    data
  }
}

export const toggleErrorMessage = data => {
  return {
    type: actionTypes.TOGGLE_ERROR_MESSAGE,
    data
  }
}
