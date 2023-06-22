import { HiPlusSmall, HiMinusSmall } from 'react-icons/hi2';

const QuantityBtn = ({ handleQuantity, productQuantity }) => {
  return (
    <div className='flex justify-between w-2/5 px-5 py-3 sm:w-2/6 bg-slate-100'>
      <div className='flex items-center justify-center cursor-pointer text-slate-500 hover:text-cusOrangeDark'>
        <button onClick={() => handleQuantity('dec')}>
          <HiMinusSmall />
        </button>
      </div>
      <div className='flex items-center justify-center w-5 font-bold'>
        {productQuantity}
      </div>
      <div className='flex items-center justify-center cursor-pointer text-slate-500 hover:text-cusOrangeDark'>
        <button onClick={() => handleQuantity('inc')}>
          <HiPlusSmall />
        </button>
      </div>
    </div>
  );
};
export default QuantityBtn;
