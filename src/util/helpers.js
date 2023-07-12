export const getImgUrl = (name) => {
  return new URL(`${name}`, import.meta.url).href;
};

export const getLocalItem = () => {
  const storage = localStorage.getItem('cart');

  if (!storage) return [];

  return JSON.parse(storage);
};

export const getLocalTotalPrice = (statePrice) => {
  const price = localStorage.getItem(statePrice);

  if (!price) return 0;

  return JSON.parse(price);
};

export const setLocalItem = (
  cartState,
  totalPriceState,
  totalPriceVat,
  grandTotal
) => {
  localStorage.setItem('cart', JSON.stringify(cartState));
  localStorage.setItem('totalPrice', JSON.stringify(totalPriceState));
  localStorage.setItem('totalPriceVat', JSON.stringify(totalPriceVat));
  localStorage.setItem('grandTotal', JSON.stringify(grandTotal));
};
