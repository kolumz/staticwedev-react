import * as types from "../constants/actionTypes";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case types.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };
    case types.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
