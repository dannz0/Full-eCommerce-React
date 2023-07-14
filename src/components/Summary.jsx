import { useDispatch, useSelector } from 'react-redux';
import { getImgUrl } from '../util/helpers';
import { HiPlusSmall, HiMinusSmall } from 'react-icons/hi2';
import { handleQuantity } from '../slices/cartSlice';

const Summary = () => {
  const { cart, totalPrice, totalPriceVat, shipping, grandTotal } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col px-8 py-12 mt-4 bg-white rounded-md shadow-xl gap-7 lg:w-1/3 lg:mt-0 md:h-min'>
      <h4 className='text-xl font-bold tracking-wide text-black uppercase md:text-2xl'>
        summary
      </h4>

      <div className='flex flex-col gap-7'>
        {/* CART ITEMS */}
        {cart.map((product) => {
          const { image, name, price, productQuantity, slug } = product;
          const { mobile } = image;

          return (
            <div key={slug} className='flex justify-between w-full'>
              <div className='flex gap-2 sm:gap-4 lg:gap-4'>
                <div className='flex items-center justify-center overflow-hidden rounded-md min-w-[4rem] max-w-[5rem]'>
                  <img
                    src={getImgUrl(mobile)}
                    alt={name}
                    className='rounded-md '
                  />
                </div>
                <div className='flex flex-col items-start justify-center max-w-[6rem] gap-1'>
                  <span className='font-bold z-10 leading-5 w-auto text-black text-md max-w-[8rem]'>
                    {name}
                  </span>
                  <span className='font-bold text-gray-500'>
                    $ {price.toLocaleString(`${navigator.language}`)}
                  </span>
                </div>
              </div>
              {/* <span className='flex items-center justify-center ml-4 font-bold text-gray-500 lg:text-lg'>
                {productQuantity}x
              </span> */}

              <div className='flex self-center justify-between px-4 py-2 bg-transparent max-w-[7rem]'>
                <div className='flex items-center justify-center text-gray-500 cursor-pointer hover:text-cusOrangeDark'>
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
                <div className='flex items-center justify-center text-gray-500 cursor-pointer hover:text-cusOrangeDark'>
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
        })}
      </div>

      {/* PRICE NUMBERS */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <span className='text-gray-500 uppercase text-md'>total</span>
          <span className='text-lg font-bold text-black'>
            $ {totalPrice.toLocaleString(`${navigator.language}`)}
          </span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-500 uppercase text-md'>shipping</span>
          <span className='text-lg font-bold text-black'>
            $ {shipping.toLocaleString(`${navigator.language}`)}
          </span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-500 uppercase text-md'>
            vat (included)
          </span>
          <span className='text-lg font-bold text-black'>
            ${' '}
            {Math.trunc(totalPriceVat).toLocaleString(`${navigator.language}`)}
          </span>
        </div>
        <div className='flex justify-between mt-4'>
          <span className='uppercase text-slate-400 text-md'>grand total</span>
          <span className='text-lg font-bold text-cusOrangeDark'>
            $ {Math.trunc(grandTotal).toLocaleString(`${navigator.language}`)}
          </span>
        </div>

        <label
          id='submit-btn'
          htmlFor='submit-form'
          className='flex items-center justify-center mt-4 text-white cursor-pointer button bg-cusOrangeDark hover:bg-cusOrangeLight'
        >
          continue & pay
        </label>
      </div>
    </div>
  );
};
export default Summary;
