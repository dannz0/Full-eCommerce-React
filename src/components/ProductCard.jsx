import { useNavigate } from 'react-router-dom';
import { getImgUrl } from '../util/helpers';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import QuantityBtn from './QuantityBtn';

const ProductCard = ({
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
  productQuantity,
  setproductQuantity,
  handleQuantity,
}) => {
  const { mobile, tablet, desktop } = image;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    // CONTAINER
    <div className='relative flex flex-col items-center justify-center gap-6 mt-20 section-margin section-padding lg:mt-36 md:flex-row lg:w-full lg:gap-28 md:gap-10'>
      {/* BACK BTN */}
      <button
        onClick={() => navigate(`/${category}`)}
        className='self-start text-sm font-semibold text-slate-400 md:absolute md:-top-10 md:left-14 lg:left-[9rem] xl:left-[20rem] hover:text-cusOrangeDark'
      >
        Go back
      </button>

      {/* IMG CONTAINER */}
      <div className='flex items-center justify-center w-full overflow-hidden rounded-md sm:mb-8 md:mb-0 max-h-80 md:max-h-full md:w-96 lg:h-full lg:w-full lg:max-h-fit'>
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
        <p className='text-sm text-left text-gray-700'>{description}</p>
        <span className='text-xl font-bold text-black lg:text-3xl'>
          $ {price.toLocaleString(`${navigator.language}`)}
        </span>

        {/* quantity display */}
        <div className='flex gap-3 xl:w-96'>
          <QuantityBtn
            handleQuantity={handleQuantity}
            productQuantity={productQuantity}
          />

          {/* add to cart btn */}
          <div className='w-3/5'>
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    productQuantity,
                    price,
                    name,
                    prod_id,
                    image,
                    slug,
                  })
                );

                setproductQuantity(1);
              }}
              className='w-full h-full text-white sm:w-48 xl:w-52 button bg-cusOrangeDark hover:bg-cusOrangeLight'
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
