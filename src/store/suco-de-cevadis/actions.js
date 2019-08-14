import Types from "./constants";

const loadSucoDeCevadisRequest = payload => ({
  type: Types.LOAD_SUCO_DE_CEVADIS_REQUEST,
  payload
});

const loadSucoDeCevadisSucces = payload => ({
  type: Types.LOAD_SUCO_DE_CEVADIS_FAILURE,
  payload
});

const loadSucoDeCevadisFailure = payload => ({
  type: Types.LOAD_SUCO_DE_CEVADIS_SUCCESS,
  payload
});

export default {
  loadSucoDeCevadisRequest,
  loadSucoDeCevadisSucces,
  loadSucoDeCevadisFailure
};
