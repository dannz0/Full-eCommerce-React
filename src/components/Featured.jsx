import zx9SpeakerImgMobile from '../assets/home/mobile/image-speaker-zx9.png';
import zx9SpeakerImgTablet from '../assets/home/tablet/image-speaker-zx9.png';
import zx9SpeakerImgDesktop from '../assets/home/desktop/image-speaker-zx9.png';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <section className='flex flex-col gap-6 section-padding section-margin'>
      <div className='relative flex flex-col items-center justify-center px-4 overflow-hidden rounded-md lg:flex-row gap-14 py-14 md:py-24 lg:pt-72 lg:pb-44 lg:justify-evenly lg:h-80 bg-cusOrangeDark featured-bg-image'>
        <div className='h-52 lg:h-96'>
          <img
            src={zx9SpeakerImgMobile}
            alt='speaker'
            srcSet={`${zx9SpeakerImgMobile} 768w, ${zx9SpeakerImgTablet} 1020w, ${zx9SpeakerImgDesktop} 1440w`}
            sizes='(max-width: 768px) 768px, (max-width: 1020px) 1020px, (max-width:1440px) 1440px'
            className='w-full h-full'
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-8 lg:items-start lg:mb-24'>
          <span className='text-4xl font-bold text-center text-white uppercase md:text-5xl lg:text-left'>
            zx9<br></br> speaker
          </span>

          <p className='pl-6 text-center text-white/70 text-md md:w-96 lg:text-left lg:text-sm lg:pl-0 lg:w-56'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <Link
            to={`/speakers/zx9-speaker`}
            className='text-white bg-black button hover:bg-gray-600'
          >
            see product
          </Link>
        </div>
      </div>
      <div style={{ backgroundColor: 'black', height: '2rem' }}>b</div>
      <div>c</div>
      <div>d</div>
    </section>
  );
};
export default Featured;
