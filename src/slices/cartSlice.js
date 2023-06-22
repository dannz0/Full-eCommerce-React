import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalPrice: 0,
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

        state.totalPrice =
          payload.price * (payload.productQuantity + tempCart.productQuantity);

        state.cart.splice(index, 1, tempCart);
      }

      if (!tempCart) {
        tempCart = {
          ...payload,
          prices: payload.price * payload.productQuantity,
        };

        state.totalPrice =
          payload.price * payload.productQuantity + state.totalPrice;

        state.cart.push(tempCart);
      }
    },

    handleQuantity: (action) => {
      if (action === 'inc') {
        // capping at 20
        if (productQuantity >= 20) return;

        !!dothis;
        return;
      }

      if (productQuantity === 1) return;

      if (action === 'dec') {
        setproductQuantity(productQuantity - 1);
        return;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
