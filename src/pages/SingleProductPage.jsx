import { useParams } from 'react-router-dom';
import {
  About,
  MenuCategories,
  SingleProductComponent,
  YouMayAlsoLike,
} from '../components';

const SingleProductPage = () => {
  const { id } = useParams();

  return (
    <>
      <SingleProductComponent id={id} />
      <YouMayAlsoLike id={id} />
      <MenuCategories />
      <About />
    </>
  );
};
export default SingleProductPage;
