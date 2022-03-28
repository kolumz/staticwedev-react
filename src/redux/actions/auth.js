import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.singIn(formData);

    dispatch({ type: types.AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  console.log(formData);

  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: types.AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
