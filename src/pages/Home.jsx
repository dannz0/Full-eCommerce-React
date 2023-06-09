import { useEffect } from 'react';
import { About, Categories, Featured, Hero } from '../components';
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
      <Categories />
      <Featured />
      <About />
    </main>
  );
};
export default Home;
