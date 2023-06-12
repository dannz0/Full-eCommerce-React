import { useParams } from 'react-router-dom';
import { About, Categories, SingleProductComponent } from '../components';

const SingleProductPage = () => {
  const id = useParams();

  return (
    <>
      <SingleProductComponent />
      <h2>recommendation component</h2>
      <Categories />
      <About />
    </>
  );
};
export default SingleProductPage;
