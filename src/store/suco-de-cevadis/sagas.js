import { takeEvery, put, all } from "redux-saga/effects";

import actions from "./actions";
import Types from "./constants";
import CervejaRepository from "../../models/cerveja/Repository";
import CervejaHttpMapper from "../../models/cerveja/HttpMapper";

import Http from "../../utils/Http";

function* loadLoadCevadis(action) {
  try {
    const data = yield Http.request(
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
