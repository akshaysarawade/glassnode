import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {
  fetchCurrenciesSaga,
} from "./appSaga";

export function* rootSaga() {
  yield takeEvery(actionTypes.FETCH_CURRENCIES, fetchCurrenciesSaga);
}
