import { useDispatch, useSelector } from 'react-redux';
import checkImg from '../assets/checkout/icon-order-confirmation.svg';
import { getImgUrl } from '../util/helpers';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { removeAllItems } from '../slices/cartSlice';
import { toggleisFormSubmitted } from '../slices/globalSlice';

const Modal = () => {
  const { grandTotal, cart } = useSelector((state) => state.cart);
  const { isFormSubmitted } = useSelector((state) => state.global);
  const [isViewMoreClicked, setisViewMoreClicked] = useState(false);
  const bg = document.querySelector('#bg');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleisFormSubmitted(false));
    dispatch(removeAllItems());
    bg.classList.add('hidden');
  };

  return (
    <div className='absolute left-0 z-20 flex items-center justify-center w-full -top-5'>
      <div className='flex flex-col gap-6 px-6 lg:gap-12 py-6 bg-white rounded-md w-full max-w-[50rem]'>
        <div>
          <img src={checkImg} alt='checkmark' />
        </div>

        <div className='flex flex-col'>
          <span className='text-2xl font-bold tracking-wide text-black uppercase md:text-4xl'>
            thank you
          </span>
          <span className='mb-6 text-2xl font-bold tracking-wide text-black uppercase lg:mb-12 md:text-4xl'>
            for your order
          </span>
          <p className='text-gray-500 text-md md:text-xl'>
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col gap-3 pr-4 sm:px-6 rounded-t-md md:rounded-tr-none md:rounded-l-md bg-cusGrey md:w-1/2'>
            <div className='content-between gap-4 py-4 flex-flex-col'>
              {cart.map((product, i) => {
                const { image, name, price, productQuantity, slug } = product;
                const { mobile } = image;

                if (!isViewMoreClicked && i > 0) return;

                return (
                  <div key={slug} className='flex justify-between w-full'>
                    <div className='flex justify-between gap-4 lg:gap-4'>
                      <div className='flex items-center justify-center w-20 h-20 overflow-hidden rounded-md'>
                        <img src={getImgUrl(mobile)} alt={name} />
                      </div>
                      <div className='flex flex-col items-start justify-center w-24 gap-1'>
                        <span className='font-bold leading-5 text-black text-md'>
                          {name}
                        </span>
                        <span className='font-bold text-gray-500'>
                          $ {price.toLocaleString(`${navigator.language}`)}
                        </span>
                      </div>
                    </div>
                    <span className='flex items-center justify-center font-bold text-gray-500 lg:text-lg'>
                      {productQuantity}x
                    </span>
                  </div>
                );
              })}
            </div>
            <div className='-mt-4 w-4/5  h-[1px] mx-auto rounded-[500px] bg-gray-300 '></div>
            <button
              className='self-center w-40 mb-4 font-bold text-gray-500 cursor-pointer text-md hover:text-cusOrangeDark'
              onClick={() => setisViewMoreClicked(!isViewMoreClicked)}
            >
              {cart.length > 1
                ? isViewMoreClicked
                  ? 'View less'
                  : `and ${cart.length - 1} other item(s)`
                : ''}
            </button>
          </div>
          <div className='flex flex-col gap-4 px-6 py-6 bg-black rounded-b-md md:rounded-b-none md:rounded-r-md md:w-1/2 md:justify-center'>
            <span className='uppercase text-md text-white/70'>grand total</span>
            <span className='text-lg font-bold text-white'>
              $ {grandTotal.toLocaleString(`${navigator.language}`)}
            </span>
          </div>
        </div>
        <Link
          to={'/'}
          className='text-center text-white button bg-cusOrangeDark hover:bg-cusOrangeLight'
          onClick={handleClick}
        >
          back to home
        </Link>
      </div>
    </div>
  );
};
export default Modal;
