import { takeEvery, put, all } from "redux-saga/effects";

import actions from "./actions";
import Types from "./constants";
import CervejaRepository from "../../models/cerveja/Repository";
import CervejaHttpMapper from "../../models/cerveja/HttpMapper";

const HttpFetcher = {
  request: ({ method, path, data }, mapper) => {
    // const methodCap = mayBeString(method).unit('post').toLowerCase();
    const requestMethod = method.toLowerCase();

    return fetch(path, { method: requestMethod })
      .then(res => res.json())
      .then(mapper);
  }
};

function* loadLoadCevadis(action) {
  try {
    const data = yield HttpFetcher.request(
      CervejaRepository.getCervejas(action.payload),
      CervejaHttpMapper.fromLoadCervejas
    );

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
