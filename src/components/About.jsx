const About = () => {
  return (
    <section className='flex flex-col-reverse items-center justify-center gap-6 md:gap-20 lg:flex-row section-padding section-margin'>
      <div className='flex flex-col w-full gap-6 text-center md:gap-10'>
        <span className='text-3xl font-semibold tracking-widest text-black uppercase md:text-5xl'>
          bringing you the <span className='text-cusOrangeDark'>best</span>{' '}
          audio gear
        </span>

        <p className='text-sm text-center text-gray-500/90'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className='w-full rounded-md h-72 md:h-96 about-bg-image'></div>
    </section>
  );
};
export default About;
