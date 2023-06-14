import { About, MenuCategories, Featured, Hero } from '../components';

const Home = () => {
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
