import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (state, { payload }) => {
      return payload;
    },
  },
});

export const { saveUserData } = userSlice.actions;

export default userSlice.reducer;
