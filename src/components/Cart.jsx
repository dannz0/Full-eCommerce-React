const Cart = ({ isCartHovered, setIsCartHovered }) => {
  return (
    <div
      className={
        isCartHovered
          ? `absolute left-0 z-10 w-screen h-screen top-20 bg-black/50 flex justify-center md:justify-end md:top-[4.8rem] lg:top-[5.3rem] xl:top-[5.2rem]`
          : `hidden`
      }
      onClick={() => {
        setIsCartHovered(false);
      }}
    >
      <div
        className={isCartHovered ? `flex cart` : `hidden cart`}
        onMouseLeave={() => setIsCartHovered(false)}
      >
        asdasd
      </div>
    </div>
  );
};
export default Cart;
