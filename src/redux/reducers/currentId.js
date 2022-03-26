import * as types from "../constants/actionTypes";

const initialState = { currentId: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POST:
      return { ...state, currentId: action.payload };
    default:
      return { ...state };
  }
};
