import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  //   reducers: {},
  //   extraReducers: (builder) => {},
});

export default cartSlice.reducer;
