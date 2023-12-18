import { createSlice } from "@reduxjs/toolkit";
import { cartTypes } from "../types";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    [cartTypes.ADD](state, action) {
      state.cart.push(action.payload);
    },
    [cartTypes.REMOVE](state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
