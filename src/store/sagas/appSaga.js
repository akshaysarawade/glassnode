import { put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "../actions/actions";

export function* fetchCurrenciesSaga(action) {
  // yield put(actions.authStart());
  // const authData = {
  //   email: action.email,
  //   password: action.password,
  //   returnSecureToken: true
  // };
  // let url =
  //   "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY";
  // if (!action.isSignup) {
  //   url =
  //     "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY";
  // }
  // try {
  //   const response = yield axios.post(url, authData);

  //   const expirationDate = yield new Date(
  //     new Date().getTime() + response.data.expiresIn * 1000
  //   );
  //   yield localStorage.setItem("token", response.data.idToken);
  //   yield localStorage.setItem("expirationDate", expirationDate);
  //   yield localStorage.setItem("userId", response.data.localId);
  //   yield put(
  //     actions.authSuccess(response.data.idToken, response.data.localId)
  //   );
  //   yield put(actions.checkAuthTimeout(response.data.expiresIn));
  // } catch (error) {
  //   yield put(actions.authFail(error.response.data.error));
  // }
}


