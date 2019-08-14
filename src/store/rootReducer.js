import { combineReducers } from "redux";

import sucoDeCevadisReducer from "./suco-de-cevadis/reducer";

const appReducer = combineReducers({
  sucoDeCevadis: sucoDeCevadisReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
