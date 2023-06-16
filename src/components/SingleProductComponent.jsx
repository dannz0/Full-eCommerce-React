import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleProduct } from '../slices/globalSlice';
import Loading from './Loading';
import { getImgUrl } from '../util/helpers';
import { HiPlusSmall, HiMinusSmall } from 'react-icons/hi2';

const SingleProductComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productQuantity, setproductQuantity] = useState(1);
  const { products, singleProdIsLoading, currentProduct } = useSelector(
    (state) => state.global
  );

  const handleQuantity = (action) => {
    if (action === 'inc') {
      // capping at 20
      if (productQuantity >= 20) return;

      setproductQuantity(productQuantity + 1);
      return;
    }

    if (productQuantity === 1) return;

    if (action === 'dec') {
      setproductQuantity(productQuantity - 1);
      return;
    }
  };

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, products]);

  if (singleProdIsLoading) {
    return <Loading />;
  }

  if (!singleProdIsLoading) {
    console.log(id, currentProduct);

    const {
      category,
      description,
      features,
      gallery,
      id: prod_id,
      image,
      includes,
      name,
      new: isNew,
      others,
      price,
      slug,
    } = currentProduct;
    const { mobile, tablet, desktop } = image;

    return (
      <>
        {/* // CONTAINER */}
        <div className='relative flex flex-col items-center justify-center gap-6 mt-20 section-margin section-padding lg:mt-36 md:flex-row lg:w-full lg:gap-28 md:gap-10'>
          {/* BACK BTN */}
          <button
            onClick={() => navigate(`/${category}`)}
            className='self-start text-sm font-semibold text-slate-400 md:absolute md:-top-10 md:left-14 lg:left-[13rem] xl:left-[20rem]'
          >
            Go back
          </button>
          {/* IMG CONTAINER */}
          <div className='flex items-center justify-center w-full overflow-hidden rounded-md max-h-80 md:max-h-full md:w-96 lg:h-full lg:w-full lg:max-h-fit'>
            <img
              src={getImgUrl(mobile)}
              srcSet={`${getImgUrl(mobile)} 768w, ${getImgUrl(
                tablet
              )} 1020w, ${getImgUrl(desktop)} 1440w`}
              alt={name}
              className='w-full h-full'
            />
          </div>
          {/* PROD DETAILS  */}
          <div className='flex flex-col self-start justify-center gap-6 lg:w-full lg:gap-10 md:gap-10 md:w-5/6 xl:self-center'>
            {isNew && (
              <span className='text-xs tracking-[0.5rem] uppercase text-cusOrangeDark lg:mb-0'>
                new product
              </span>
            )}
            <h3 className='text-3xl font-bold tracking-wider text-left text-black uppercase md:text-4xl lg:text-left lg:w-64'>
              {name}
            </h3>
            <p className='text-sm text-left text-gray-700 lg:text-left'>
              {description}
            </p>
            <span className='text-xl font-bold text-black lg:text-3xl'>
              $ {price.toLocaleString(`${navigator.language}`)}
            </span>

            {/* quantity display */}
            <div className='flex gap-3 xl:w-96'>
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

              {/* add to cart btn */}
              <div className='w-3/5'>
                <button className='w-full h-full text-white sm:w-48 xl:w-52 button bg-cusOrangeDark hover:bg-cusOrangeLight'>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* FEATURES AND IN THE BOX */}
      </>
    );
  }
};
export default SingleProductComponent;
