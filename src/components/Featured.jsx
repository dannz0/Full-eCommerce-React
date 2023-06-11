import zx9SpeakerImgMobile from '../assets/home/mobile/image-speaker-zx9.png';
import zx9SpeakerImgTablet from '../assets/home/tablet/image-speaker-zx9.png';
import zx9SpeakerImgDesktop from '../assets/home/desktop/image-speaker-zx9.png';
import earphoneImgMobile from '../assets/home/mobile/image-earphones-yx1.jpg';
import earphoneImgTablet from '../assets/home/tablet/image-earphones-yx1.jpg';
import earphoneImgDesktop from '../assets/home/desktop/image-earphones-yx1.jpg';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <section className='flex flex-col gap-6 lg:gap-10 section-padding section-margin'>
      {/* SPEAKER ZX9 */}
      <div className='relative flex flex-col items-center justify-center px-6 overflow-hidden rounded-md lg:flex-row gap-14 py-14 md:py-24 lg:pt-72 lg:pb-44 lg:justify-evenly lg:h-80 bg-cusOrangeDark featured-bg-image'>
        <div className='h-52 lg:h-96'>
          <img
            src={zx9SpeakerImgMobile}
            alt='speaker'
            srcSet={`${zx9SpeakerImgMobile} 768w, ${zx9SpeakerImgTablet} 1020w, ${zx9SpeakerImgDesktop} 1440w`}
            // sizes='(max-width: 768px) 768px, (max-width: 1020px) 1020px, (max-width:1440px) 1440px'
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

      {/* SPEAKER ZX7 */}
      <div className='flex items-center justify-between gap-10 px-6 overflow-hidden bg-gray-300 rounded-md py-14 md:py-24 zx7-bg-image lg:px-20 md:h-96'>
        <div className='flex flex-col items-start justify-center gap-10'>
          <span className='gap-10 text-3xl font-bold text-center text-black uppercase md:text-4xl lg:text-left'>
            zx7 speaker
          </span>

          <Link
            to={`/speakers/zx7-speaker`}
            className='text-black bg-transparent border border-black button hover:bg-black hover:text-white'
          >
            see product
          </Link>
        </div>
      </div>

      {/* EARPHONE YX1 */}
      <div className='flex flex-col justify-center gap-10 rounded-md lg:justify-between md:flex-row md:gap-2 '>
        <div className='w-full overflow-hidden rounded-md h-52 yx1-bg-image md:h-96 md:w-1/2'></div>

        <div className='flex flex-col items-start gap-6 px-6 rounded-md md:justify-center md:gap-12 bg-cusGrey py-14 md:py-24 lg:px-20 h-52 md:h-96 md:w-1/2'>
          <span className='gap-10 text-3xl font-bold text-left text-black uppercase md:text-4xl'>
            yx1 earphones
          </span>

          <Link
            to={`/speakers/yx1-earphone`}
            className='text-black bg-transparent border border-black button hover:bg-black hover:text-white'
          >
            see product
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Featured;
