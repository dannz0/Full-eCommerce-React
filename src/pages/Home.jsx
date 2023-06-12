import { useEffect } from 'react';
import { About, MenuCategories, Featured, Hero } from '../components';
import { getProducts } from '../slices/globalSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <main className='bg-white '>
      <Hero />
      <MenuCategories />
      <Featured />
      <About />
    </main>
  );
};
export default Home;
