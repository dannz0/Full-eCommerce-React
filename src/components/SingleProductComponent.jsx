import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../slices/globalSlice';
import Loading from './Loading';
import ProductCard from './ProductCard';
import Gallery from './Gallery';
import ProductDetails from './ProductDetails';
import Error from './Error';

const SingleProductComponent = ({ id }) => {
  const dispatch = useDispatch();
  const { products, singleProdIsLoading, currentProduct } = useSelector(
    (state) => state.global
  );
  const [productQuantity, setproductQuantity] = useState(1);

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

  if (currentProduct === '404') {
    return <Error />;
  }

  const { gallery, includes, features } = currentProduct;

  if (!singleProdIsLoading) {
    return (
      <>
        <ProductCard
          {...currentProduct}
          productQuantity={productQuantity}
          setproductQuantity={setproductQuantity}
          handleQuantity={handleQuantity}
        />
        <ProductDetails includes={includes} features={features} />
        <Gallery gallery={gallery} />
      </>
    );
  }
};
export default SingleProductComponent;
