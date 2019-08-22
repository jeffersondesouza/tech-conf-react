import { all } from "redux-saga/effects";

import sucoDeCevadisSagas from "./suco-de-cevadis/sagas";

export default function* rootSaga() {
  yield all([sucoDeCevadisSagas()]);
}
