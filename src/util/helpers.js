export const getImgUrl = (name) => {
  return new URL(`${name}`, import.meta.url).href;
};
