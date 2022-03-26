// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { API } from "../../../axios";
// const initialState = {
//   authData: null,
//   loading: false,
// };

// export const signin = createAsyncThunk(
//   "auth/signin",
//   async (paylooad, thunkAPI) => {
//     const { form, navigate } = paylooad;
//     const res = await API.post("signin", form)
//       .then(() => {
//         //
//         navigate("/");
//       })
//       .catch((err) => console.log("error: ", err));
//     return res;
//   }
// );

// export const signup = createAsyncThunk(
//   "auth/signup",
//   async (paylooad, thunkAPI) => {
//     const { form, navigate } = paylooad;
//     const res = await API.post("signin", form)``
//       .then(() => {
//         //
//         navigate("/");
//       })
//       .catch((err) => console.log("error: ", err));
//     return res;
//   }
// );

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
//       state.authData = action.payload;
//     },
//     logout: (state, action) => {
//       localStorage.removeItem("profile");
//       state.authData = null;
//     },
//   },
//   extraReducers: {
//     [signin.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signin.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//     },
//     [signin.rejected]: (state) => {
//       state.loading = false;
//     },
//     [signup.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signup.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//     },
//     [signup.rejected]: (state) => {
//       state.loading = false;
//     },
//   },
// });
// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
