import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import ProductDetailsSlice from "./productDetails/ProductDetailsSlice";
import productsSlice from "./products/productsSlice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
        categories: categoriesSlice,
        productDetails: ProductDetailsSlice
    }
})