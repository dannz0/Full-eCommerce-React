import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { customFetch } from '../util/axios';
import { API_ID } from '../assets/data';

const initialState = {
  isLoading: true,
  bgFilter: false,
  singleProdIsLoading: true,
  singleCategoryIsLoading: true,
  products: [],
  currentProduct: {},
  filteredProducts: [],
  isFormSubmitted: false,
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    getCategory: (state, { payload }) => {
      state.singleCategoryIsLoading = true;
      const filtered = state.products.filter(
        (product) => product.category === payload
      );

      state.filteredProducts = filtered;

      if (state.filteredProducts) {
        state.singleCategoryIsLoading = false;
      }
    },

    getSingleProduct: (state, { payload }) => {
      state.singleProdIsLoading = true;

      if (!state.products.length) return;

      const filtered = state.products.filter(
        // using the slug instead of id (did not make unique ids)
        (product) => product.slug === payload
      );

      state.currentProduct = filtered[0] || '404';

      if (state.currentProduct) {
        state.singleProdIsLoading = false;
      }
    },

    toggleBgFilter: (state, { payload }) => {
      state.bgFilter = payload;
    },
    toggleisFormSubmitted: (state, { payload }) => {
      state.isFormSubmitted = payload;
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

export const { getCategory, getSingleProduct, toggleisFormSubmitted } =
  globalSlice.actions;

export default globalSlice.reducer;
