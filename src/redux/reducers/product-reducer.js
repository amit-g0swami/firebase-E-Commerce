import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../services/product-service";

const initialState = { products: [] };

export const getProductsData = createAsyncThunk("products/fetch", getData);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, () => {})
      .addCase(getProductsData.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProductsData.rejected, () => {});
  }
});

export default productsSlice.reducer;
