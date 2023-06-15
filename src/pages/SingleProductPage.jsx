import { useParams } from 'react-router-dom';
import { About, MenuCategories, SingleProductComponent } from '../components';

const SingleProductPage = () => {
  const id = useParams();
  console.log(id);

  return (
    <>
      <SingleProductComponent />
      <h2>recommendation component</h2>
      <MenuCategories />
      <About />
    </>
  );
};
export default SingleProductPage;
