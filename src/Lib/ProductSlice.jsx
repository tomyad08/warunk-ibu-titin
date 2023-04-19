import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    sembako: [],
    elektronika: [],
    kesehatan: [],
    kebersihan: [],
    alatTulis: [],
    orders: [],
  },
  reducers: {
    addSembako: (state, action) => {
      state.sembako.push(action.payload);
    },
    addElektronika: (state, action) => {
      state.elektronika.push(action.payload);
    },
    addAlatTulis: (state, action) => {
      state.alatTulis.push(action.payload);
    },
    addKesehatan: (state, action) => {
      state.kesehatan.push(action.payload);
    },
    addKebersihan: (state, action) => {
      state.kebersihan.push(action.payload);
    },
    addOrders: (state, action) => {
      let arr = state.orders;
      arr.push(action.payload);
      const uniqueArr = [...new Set(arr)];
      state.orders = uniqueArr;
    },
    deleteOrders: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addSembako,
  addOrders,
  addAlatTulis,
  addElektronika,
  addKesehatan,
  addKebersihan,
  deleteOrders,
} = productSlice.actions;

export default productSlice.reducer;
