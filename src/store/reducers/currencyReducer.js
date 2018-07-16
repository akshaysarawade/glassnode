import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currencyData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENCIES:
      return {
        ...state,
        currencyData: action.data
      };
    default:
      return state;
  }
};

export default reducer;
