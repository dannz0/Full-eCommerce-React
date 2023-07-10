import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import globalSlice from './slices/globalSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    global: globalSlice,
    user: userSlice,
  },
});

export default store;
