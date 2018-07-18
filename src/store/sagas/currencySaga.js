import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/actions";

export function* fetchCurrenciesSaga(action) {
  //  using this modified URL as the coinmarket apis are not CORS supported
  let url =
    "https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v2/ticker?structure=array";
  if (action.rowCount && action.rowCount !== "all") {
    url = `${url}&limit=${action.rowCount}`;
  }
  try {
    const response = yield axios.get(url, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
    if (response.status === 200) {
      yield put(actions.updateCurrencies(response.data));
    } else {
      console.log("Error: ", response);
      //  TODO: handle error
    }
  } catch (error) {
    // yield put(actions.error(error.response.data.error));
  }
}
