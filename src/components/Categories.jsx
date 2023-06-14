import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../slices/globalSlice';
import Loading from './Loading';
import SingleCategory from './SingleCategory';

const Categories = ({ category }) => {
  const dispatch = useDispatch();
  const { filteredProducts, isLoading, products } = useSelector(
    (state) => state.global
  );

  useEffect(() => {
    dispatch(getCategory(category));
  }, [category, products]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className='flex flex-col-reverse items-center justify-center mb-48 -mt-20 gap-28 lg:gap-36 section-padding section-margin'>
      {filteredProducts.map((product, i) => {
        // console.log(product);
        return <SingleCategory key={product.id} {...product} index={i + 1} />;
      })}
    </section>
  );
};
export default Categories;
