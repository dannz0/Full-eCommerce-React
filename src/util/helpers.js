export const getImgUrl = (name) => {
  return new URL(`${name}`, import.meta.url).href;
};

export const getLocalItem = () => {
  const storage = localStorage.getItem('cart');

  return JSON.parse(storage) || [];
};

export const getLocalTotalPrice = () => {
  const price = localStorage.getItem('totalPrice');

  return JSON.parse(price) || 0;
};

export const setLocalItem = (cartState, totalPriceState) => {
  localStorage.setItem('cart', JSON.stringify(cartState));
  localStorage.setItem('totalPrice', JSON.stringify(totalPriceState));
};
