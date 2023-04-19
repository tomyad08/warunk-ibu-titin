import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./ProductSlice";
export const store = configureStore({
  reducer: {
    product: productReducers,
  },
});
