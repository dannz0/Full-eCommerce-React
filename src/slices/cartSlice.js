import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let tempCart;

      tempCart = state.cart.find((product) => product.slug === payload.slug);

      if (tempCart) {
        const index = state.cart.findIndex(
          (prod) => prod.name === payload.name
        );

        tempCart = {
          ...tempCart,
          productQuantity: tempCart.productQuantity + payload.productQuantity,
          prices:
            payload.price *
            (payload.productQuantity + tempCart.productQuantity),
        };

        state.cart.splice(index, 1, tempCart);
      }

      if (!tempCart) {
        tempCart = {
          ...payload,
          prices: payload.price * payload.productQuantity,
        };

        state.cart.push(tempCart);
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
