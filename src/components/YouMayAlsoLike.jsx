import { useSelector } from 'react-redux';
import { getImgUrl } from '../util/helpers';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const YouMayAlsoLike = ({ id }) => {
  const { currentProduct, singleProdIsLoading } = useSelector(
    (state) => state.global
  );

  if (singleProdIsLoading) {
    return;
  }

  return (
    <section className='mb-44 section-padding xl:mb-52'>
      <div className='flex items-center justify-center mb-6 lg:mb-14'>
        <span className='text-lg font-bold tracking-wide text-center text-black uppercase xl:text-3xl'>
          you may also like
        </span>
      </div>
      <div className='flex flex-col gap-10 md:flex-row sm:gap-14'>
        {currentProduct.others.map((product) => {
          const { desktop, mobile, tablet } = product.image;
          console.log(desktop);
          return (
            <div
              key={product.slug}
              className='flex flex-col items-center justify-center gap-4 xl:gap-10'
            >
              <div className='overflow-hidden rounded-md'>
                <img
                  src={`${getImgUrl(`${getImgUrl(mobile)}`)}`}
                  alt={product.name}
                  srcSet={`${getImgUrl(mobile)} 768w, ${getImgUrl(
                    tablet
                  )} 1020w, ${getImgUrl(desktop)} 1440w`}
                />
              </div>

              <span className='text-lg font-bold tracking-wide text-center text-black uppercase xl:text-2xl'>
                {product.name}
              </span>

              <Link
                to={`/${currentProduct.category}/${product.slug}`}
                className='flex justify-center text-white md:w-44 button bg-cusOrangeDark hover:bg-cusOrangeLight xl:w-48 xl:-mt-2'
              >
                see product
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default YouMayAlsoLike;
