import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import blogs from "../../data/blogs.json";
import type { BlogsProps } from "../../interfaces";

const initialState: BlogsProps = {
  posts: blogs,
  currentPage: 1,
  blogsPerPage: 6,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});
export const { changePage } = postsSlice.actions;
export default postsSlice.reducer;
