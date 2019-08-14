import { takeEvery, call, all, put, select } from "redux-saga/effects";

import actions from "./actions";
import Types from "./constants";

function* rootSaga() {
  yield all([
    // watchValidateToken(),
  ]);
}

export default rootSaga;
