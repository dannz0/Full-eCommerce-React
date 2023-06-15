import { Link } from 'react-router-dom';
import img from '../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg';
import { getImgUrl } from '../util/helpers';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const SingleCategory = ({
  slug,
  name,
  description,
  new: isNew,
  categoryImage,
  index,
}) => {
  const { mobile, tablet, desktop } = categoryImage;

  const { singleCategoryIsLoading } = useSelector((state) => state.global);

  if (singleCategoryIsLoading) {
    return <Loading />;
  }

  return (
    // CONTAINER
    <div
      className={
        index % 2
          ? `lg:flex-row single-category`
          : `lg:flex-row-reverse single-category`
      }
    >
      {/* IMAGE */}
      <div className='flex items-center justify-center w-full overflow-hidden rounded-md max-h-96 lg:h-full lg:w-full md:max-h-72 lg:max-h-fit'>
        <img
          src={getImgUrl(mobile)}
          srcSet={`${getImgUrl(mobile)} 768w, ${getImgUrl(
            tablet
          )} 1020w, ${getImgUrl(desktop)} 1440w`}
          alt={name}
          className='w-full h-full'
        />
      </div>

      {/* DETAILS */}
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
