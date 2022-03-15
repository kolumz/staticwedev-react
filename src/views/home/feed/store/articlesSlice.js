import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  loading: false,
};
// First, create the thunk
export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async (thunkAPI) => {
    const res = await fetch(
      "http://api.mediastack.com/v1/news?access_key=c3c53ed9cc2ac2f75b7efa8e813a618f&sources=cnn,bbc&limit=100"
    ).then((data) => data.json());
    return res;
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers: {
    [getArticles.pending]: (state, action) => {
      state.loading = true;
    },
    [getArticles.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getArticles.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { getArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
