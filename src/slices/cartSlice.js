import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getLocalItem,
  getLocalTotalPrice,
  setLocalItem,
} from '../util/helpers';

const initialState = {
  cart: getLocalItem(),
  totalPrice: getLocalTotalPrice(),
  totalPriceVat: 0,
  shipping: 50,
  grandTotal: 0,
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

      state.totalPrice += tempCart.prices;
      state.totalPriceVat = state.totalPrice * 0.2;
      state.grandTotal =
        state.totalPriceVat + state.shipping + state.totalPrice;

      toast.success('Item added to your cart!');
      setLocalItem(state.cart, state.totalPrice);
    },

    handleQuantity: (state, { payload }) => {
      const index = state.cart.findIndex((prod) => prod.slug === payload.slug);
      const product = state.cart.at(index);

      if (payload.action === 'inc') {
        // capping at 20
        if (product.productQuantity >= 20) return;

        product.productQuantity++;
        state.totalPrice += product.price;

        setLocalItem(state.cart, state.totalPrice);
        return;
      }

      if (product.productQuantity === 1) {
        state.cart = state.cart.filter((prod) => prod.slug !== product.slug);
        state.totalPrice -= product.price;

        toast.error(`Item removed!`);

        setLocalItem(state.cart, state.totalPrice);
        return;
      }

      if (payload.action === 'dec') {
        product.productQuantity--;
        state.totalPrice -= product.price;

        setLocalItem(state.cart, state.totalPrice);
        return;
      }
    },

    removeAllItems: (state) => {
      if (!state.cart.length) return;

      state.cart = [];
      state.totalPrice = 0;

      setLocalItem(state.cart, state.totalPrice);
      toast.error(`All items removed!`);
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, handleQuantity, removeAllItems } = cartSlice.actions;
