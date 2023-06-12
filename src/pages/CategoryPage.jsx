import { useLocation } from 'react-router-dom';
import { About, Categories, Header, MenuCategories } from '../components';

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.slice(1);

  return (
    <>
      <Header category={category} />
      <Categories category={category} />
      <MenuCategories />
      <About />
    </>
  );
};
export default CategoryPage;
