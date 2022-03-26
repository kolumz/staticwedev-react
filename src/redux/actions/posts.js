import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: types.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (navigate, post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: types.CREATE, payload: data });
    dispatch(getPosts());
    if (data) {
      navigate("/");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => (dispatch) => {
  dispatch({ type: types.GET_POST, payload: id });
};

export const updatePost = (navigate, id, post) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, post);
    dispatch({ type: types.UPDATE, payload: response.data });

    if (response) {
      dispatch(getPosts());
      navigate("/");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: types.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id, post) => async (dispatch) => {
  try {
    const response = await api.likePost(id);
    dispatch({ type: types.LIKE, payload: response.data });
    // if (response) {
    //   dispatch(getPosts());
    // }
  } catch (error) {
    console.log(error);
  }
};
