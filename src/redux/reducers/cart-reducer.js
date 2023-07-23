import { createSlice } from "@reduxjs/toolkit";
import { CartType } from "../actions/cart-action";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    [CartType.ADD](state, action) {
      state.caert = state?.cart?.push(action.payload);
    },
    [CartType.REMOVE](state, action) {
      state.cart = state?.cart?.filter((item) => item.id !== action.payload);
    }
  }
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
