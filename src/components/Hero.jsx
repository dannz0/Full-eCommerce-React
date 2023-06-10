import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-screen section-margin md:mb-40 lg:mb-48 lg:h-150'>
      <figure className='flex flex-col items-center justify-center h-full gap-3 bg-center bg-no-repeat bg-cover lg:items-start lg:px-40 sm:gap-6 hero-image'>
        <p className='mt-10 sm:mt-0 text-xs tracking-[0.7rem] uppercase text-cusGrey/40'>
          new product
        </p>
        <h2 className='-mb-4 text-4xl font-bold text-center text-white uppercase md:-mb-6 sm:text-6xl'>
          xx99 mark ii
        </h2>
        <h2 className='mb-2 text-4xl font-bold text-center text-white uppercase sm:text-6xl'>
          headphones
        </h2>
        <p className='mb-4 text-sm leading-6 text-center w-60 sm:w-80 text-cusGrey/60 lg:text-left'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <Link
          to={'/headphones/xx99-mark-two-headphones'}
          className='text-white button bg-cusOrangeDark hover:bg-cusOrangeLight'
        >
          see product
        </Link>
      </figure>
    </section>
  );
};
export default Hero;
