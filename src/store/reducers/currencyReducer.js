import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currencyData: {},
  rowCount: 100
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENCIES:
      return {
        ...state,
        currencyData: action.data
      };

    case actionTypes.SET_ROW_COUNT:
      return state.rowCount === action.rowCount
        ? state
        : {
            ...state,
            rowCount: action.rowCount
          };

    case actionTypes.UPDATE_CURRENCIES:
      return {
        ...state,
        currencyData: action.data.data
      };

    default:
      return state;
  }
};

export default currencyReducer;
