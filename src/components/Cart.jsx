import { useDispatch, useSelector } from 'react-redux';
import { getImgUrl } from '../util/helpers';
import { HiPlusSmall, HiMinusSmall } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { handleQuantity, removeAllItems } from '../slices/cartSlice';
import { useEffect } from 'react';

const Cart = ({ isCartHovered, setIsCartHovered }) => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const bg = document.querySelector('#bg');

  // For hiding car if user scrolls
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!isCartHovered) return;

  //     setIsCartHovered(false);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [isCartHovered]);

  useEffect(() => {
    if (isCartHovered) {
      bg.classList.remove('hidden');
      bg.classList.add('block');
    }
    if (!isCartHovered) {
      bg.classList.remove('block');
      bg.classList.add('hidden');
    }
  }, [isCartHovered]);

  return (
    <div
      className={
        isCartHovered
          ? `absolute left-0 z-10 w-screen bg-black-75 h-screen top-20 flex justify-center md:justify-end md:top-[4.8rem] lg:top-[5.2rem] xl:top-[5.2rem]`
          : `hidden`
      }
      onClick={(e) => {
        if (e.target.closest('.cart')) return;

        setIsCartHovered(false);
      }}
    >
      <div
        className={isCartHovered ? `flex cart` : `hidden cart`}
        onMouseLeave={() => setIsCartHovered(false)}
      >
        <div className='flex items-center justify-between'>
          <span className='text-xl font-bold tracking-wide text-black uppercase'>
            {`Cart (${cart.length})`}
          </span>
          <button
            className='text-sm text-gray-500 underline hover:text-cusOrangeDark'
            onClick={() => dispatch(removeAllItems())}
          >
            Remove all
          </button>
        </div>

        <div className='flex flex-col items-start justify-between gap-6 overflow-y-scroll '>
          {cart.length ? (
            cart.map((product) => {
              const { image, name, price, productQuantity, slug } = product;
              const { mobile } = image;

              return (
                <div key={slug} className='flex justify-between w-full'>
                  <div className='flex justify-between gap-4'>
                    <div className='flex items-center justify-center w-20 h-20 overflow-hidden rounded-md'>
                      <img src={getImgUrl(mobile)} alt={name} />
                    </div>
                    <div className='flex flex-col items-start justify-center w-24 gap-1'>
                      <span className='font-bold leading-5 text-black text-md'>
                        {name}
                      </span>
                      <span className='font-bold text-gray-400'>
                        $ {price.toLocaleString(`${navigator.language}`)}
                      </span>
                    </div>
                  </div>

                  <div className='flex self-center justify-between px-4 py-2 ml-6 mr-4 bg-gray-100 w-28'>
                    <div className='flex items-center justify-center cursor-pointer text-slate-500 hover:text-cusOrangeDark'>
                      <button
                        onClick={() =>
                          dispatch(handleQuantity({ action: 'dec', slug }))
                        }
                      >
                        <HiMinusSmall />
                      </button>
                    </div>
                    <div className='flex items-center justify-center w-5 font-bold'>
                      {productQuantity}
                    </div>
                    <div className='flex items-center justify-center cursor-pointer text-slate-500 hover:text-cusOrangeDark'>
                      <button
                        onClick={() =>
                          dispatch(handleQuantity({ action: 'inc', slug }))
                        }
                      >
                        <HiPlusSmall />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='absolute flex items-center self-center justify-center top-80'>
              <span className='text-xl font-bold tracking-wide text-center uppercase text-cusOrangeDark'>
                your cart is empty!
              </span>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className='flex items-center justify-between'>
            <span className='text-xl text-gray-500 uppercase'>total</span>
            <span className='text-xl font-bold text-black'>
              $ {totalPrice.toLocaleString(`${navigator.language}`)}
            </span>
          </div>
        )}

        {cart.length > 0 && (
          <Link
            to={`/checkout`}
            className='w-full text-center text-white button bg-cusOrangeDark hover:bg-cusOrangeLight'
            onClick={() => setIsCartHovered(false)}
          >
            checkout
          </Link>
        )}
      </div>
    </div>
  );
};
export default Cart;
