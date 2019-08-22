import { takeEvery, put, all } from "redux-saga/effects";

import actions from "./actions";
import Types from "./constants";

function* loadLoadCevadis(action) {
  try {
    const res = yield fetch(
      `https://api.punkapi.com/v2/beers?page=${action.payload}&per_page=3`
    );

    const data = yield res.json();

    yield put(actions.loadSucoDeCevadisSuccess(data));

  } catch (error) {}
}

function* watchLoadCevadis() {
  yield takeEvery(Types.LOAD_SUCO_DE_CEVADIS_REQUEST, loadLoadCevadis);
}

function* rootSaga() {
  yield all([watchLoadCevadis()]);
}

export default rootSaga;
