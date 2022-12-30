import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "http://localhost:3001/products";

const initialState = {
  productsList: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = axios({ url: `${PRODUCTS_URL}` }).then((res) => {
      return res.data;
    });
    return response;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },

    [fetchProducts.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default productsSlice.reducer;
