import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const PRODUCTS_URL = "http://localhost:3001/products";

const initialState = {
    productDetails: [],
    loading: false,
    error: "",
  };

  export const getDetails = createAsyncThunk(
    "productDetails/getDetails",
    async (id) => {
      return await fetch(`${PRODUCTS_URL}/${id}`)
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error.message);
    }
  );
  

const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    extraReducers: {
        [getDetails.pending]: (state) => {
          state.loading = true;
        },
        [getDetails.fulfilled]: (state, action) => {
          state.loading = false;
          state.productDetails = action.payload;
        },
    
        [getDetails.rejected]: (state, action) => {
          console.log(action);
          state.loading = false;
          state.error = "wrong...";
        }
    }
})

export default productDetailsSlice.reducer;