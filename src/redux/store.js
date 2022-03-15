import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../views/home/feed/store/articlesSlice";

export default configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
