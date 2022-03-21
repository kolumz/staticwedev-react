import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../views/auth/store/authSlice";
import articlesReducer from "../views/home/feed/store/articlesSlice";

export default configureStore({
  reducer: {
    articles: articlesReducer,
    auth: authSlice,
  },
});
