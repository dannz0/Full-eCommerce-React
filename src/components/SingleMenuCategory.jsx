import { Link } from 'react-router-dom';
import { RxChevronRight } from 'react-icons/rx';

const SingleMenuCategory = ({ img, productName, url }) => {
  return (
    <figure className='relative flex flex-col items-center justify-end w-full max-w-lg gap-4 rounded-lg md:w-64 lg:w-80 xl:w-full xl:h-56 lg:gap-4 h-44 lg:h-52 bg-cusGrey'>
      <div className='absolute w-40 h-40 -top-14 lg:w-48 lg:h-48'>
        <img src={img} alt='headphones' />
      </div>
      <span className='font-bold tracking-wider text-black uppercase text-md'>
        {productName}
      </span>
      <Link
        to={`/${url}`}
        className='flex items-center mb-6 text-xs font-semibold tracking-widest uppercase hover:text-cusOrangeDark text-slate-500'
      >
        shop <RxChevronRight className='w-5 h-5 text-cusOrangeDark' />
      </Link>
    </figure>
  );
};
export default SingleMenuCategory;
