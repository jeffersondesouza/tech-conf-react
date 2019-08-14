import INITIAL_STATE from "./state";
import Types from "./constants";

const sucoDeCevadisReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_SUCO_DE_CEVADIS_REQUEST:
      return state;

    default:
      return state;
  }
};

export default sucoDeCevadisReducer;
