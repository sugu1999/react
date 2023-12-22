import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let productsPromiseLifeCycle = createAsyncThunk(
  "products list",
  async (thunkApi) => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue("error in fetching products");
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], isPending: false, errMessage: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsPromiseLifeCycle.pending, (state, action) => {
        state.isPending = true;
        state.errMessage = "";
      })
      .addCase(productsPromiseLifeCycle.fulfilled, (state, action) => {
        state.isPending = false;
        state.products = action.payload;
        state.errMessage = "";
      })
      .addCase(productsPromiseLifeCycle.rejected, (state, action) => {
        state.isPending = false;
        state.errMessage = action.error;
      });
  },
});

//export root reducer
export default productsSlice.reducer;
