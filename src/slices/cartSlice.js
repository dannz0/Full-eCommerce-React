import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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

      toast.success('Item added to your cart!');
    },

    handleQuantity: (state, { payload }) => {
      const index = state.cart.findIndex((prod) => prod.slug === payload.slug);
      const product = state.cart.at(index);

      if (payload.action === 'inc') {
        // capping at 20
        if (product.productQuantity >= 20) return;

        product.productQuantity = product.productQuantity + 1;
        return;
      }

      if (product.productQuantity === 1) {
        state.cart = state.cart.filter((prod) => prod.slug !== product.slug);
        toast.error(`Item removed!`);
      }

      if (payload.action === 'dec') {
        product.productQuantity = product.productQuantity - 1;
        return;
      }
    },

    removeAllItems: (state) => {
      state.cart = [];
      toast.error(`All items removed!`);
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, handleQuantity, removeAllItems } = cartSlice.actions;
