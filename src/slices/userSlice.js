import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // since no back-end and not doing anything with data its empty on load
};

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
