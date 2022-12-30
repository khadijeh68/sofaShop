import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CATEGORIES_URL = "http://localhost:3001/categories";

const initialState = {
  categoriesList: [],
  loading: false,
  error: "",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = axios({ url: `${CATEGORIES_URL}` }).then((res) => {
      return res.data;
    });
    return response;
  }
);
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categoriesList = action.payload;
    },

    [fetchCategories.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default categoriesSlice.reducer;
