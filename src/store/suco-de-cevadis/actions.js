import Types from "./constants";

const loadSucoDeCevadisRequest = payload => {
  return {
    type: Types.LOAD_SUCO_DE_CEVADIS_REQUEST,
    payload
  };
};

const loadSucoDeCevadisSuccess = payload => {
  return {
    type: Types.LOAD_SUCO_DE_CEVADIS_SUCCESS,
    payload
  };
};

const loadSucoDeCevadisFailure = payload => {
  return {
    type: Types.LOAD_SUCO_DE_CEVADIS_FAILURE,
    payload
  };
};

export default {
  loadSucoDeCevadisRequest,
  loadSucoDeCevadisSuccess,
  loadSucoDeCevadisFailure
};
