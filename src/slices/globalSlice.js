import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetch } from '../util/axios';
import { API_ID } from '../assets/data';

const initialState = {
  isLoading: false,
  products: [],
  filteredProducts: [],
  currentProduct: {},
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    getCategory: (state, { payload }) => {
      state.isLoading = true;
      const filtered = state.products.filter(
        (product) => product.category === payload
      );

      state.filteredProducts = filtered;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        // throw new Error(`There was a problem`)
      });
  },
});

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async function (_, thunkAPI) {
    try {
      const { data } = await customFetch.get(`/${API_ID}`);

      const products = data.record;

      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const { getCategory } = globalSlice.actions;

export default globalSlice.reducer;
