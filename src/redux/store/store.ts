import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import postsReducer from "../slices/postsSlice";
const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
