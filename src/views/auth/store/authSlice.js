import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authData: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.authData = action.payload;
    },
    logout: (state, action) => {
      localStorage.removeItem("profile");
      state.authData = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
