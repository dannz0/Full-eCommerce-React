import { Link } from 'react-router-dom';
import img from '../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg';

const SingleCategory = ({
  id,
  slug,
  name,
  description,
  new: isNew,
  categoryImage,
  index,
}) => {
  const { mobile, tablet, desktop } = categoryImage;

  const getImgUrl = (name) => {
    return new URL(`${name}`, import.meta.url).href;
  };

  return (
    <div
      className={
        index % 2
          ? `lg:flex-row single-category`
          : `lg:flex-row-reverse single-category`
      }
    >
      <div className='flex items-center justify-center object-contain overflow-hidden rounded-md md:w-full xl:h-128 xl:w-1/2 lg:h-96 lg:w-96'>
        <img
          src={getImgUrl(mobile)}
          srcSet={`${getImgUrl(mobile)} 768w, ${getImgUrl(
            tablet
          )} 1020w, ${getImgUrl(desktop)} 1440w`}
          alt={name}
          className='object-contain w-full h-full'
        />
      </div>

      <div className='category-desc'>
        {isNew && (
          <span className='text-xs tracking-[0.5rem] uppercase text-cusOrangeDark mb-3 lg:mb-0'>
            new product
          </span>
        )}
        <h3 className='text-3xl font-bold tracking-wider text-center text-black uppercase md:text-4xl lg:text-left lg:w-64'>
          {name}
        </h3>

        <p className='text-sm text-center text-gray-700 lg:text-left'>
          {description}
        </p>

        <Link
          to={`${slug}`}
          className='text-white button bg-cusOrangeDark hover:bg-cusOrangeLight'
        >
          see product
        </Link>
      </div>
    </div>
  );
};
export default SingleCategory;
