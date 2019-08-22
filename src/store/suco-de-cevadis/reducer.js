import INITIAL_STATE from "./state";
import Types from "./constants";

const sucoDeCevadisReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_SUCO_DE_CEVADIS_REQUEST:
      return { ...state };

    case Types.LOAD_SUCO_DE_CEVADIS_SUCCESS:
      return {
        ...state,
        sucos: [...state.sucos, ...action.payload],
        total: [...state.sucos, ...action.payload].length,
        page: state.page + 1
      };

    default:
      return state;
  }
};

export default sucoDeCevadisReducer;
