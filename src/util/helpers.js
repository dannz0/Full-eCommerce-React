export const getImgUrl = (name) => {
  return new URL(`${name}`, import.meta.url).href;
};

export const getLocalItem = () => {
  const storage = localStorage.getItem('cart');

  return JSON.parse(storage) || [];
};

export const getLocalTotalPrice = (statePrice) => {
  const price = localStorage.getItem(statePrice);

  return JSON.parse(price) || 0;
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
