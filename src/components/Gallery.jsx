import { getImgUrl } from '../util/helpers';

const Gallery = ({ gallery }) => {
  const { first, second, third } = gallery;

  return (
    <div className='flex flex-col gap-6 md:flex-row lg:justify-center section-margin section-padding md:max-h-128'>
      <div className='flex flex-col gap-6 max-w-1/2 xl:max-w-40'>
        <div className='overflow-hidden rounded-md cursor-pointer'>
          <img
            src={`${getImgUrl(`${getImgUrl(first.mobile)}`)}`}
            alt=''
            srcSet={`${getImgUrl(first.mobile)} 768w, ${getImgUrl(
              first.tablet
            )} 1020w, ${getImgUrl(first.desktop)} 1440w`}
            className='hover:scale-105'
            loading='lazy'
          />
        </div>
        <div className='overflow-hidden rounded-md cursor-pointer'>
          <img
            src={`${getImgUrl(`${getImgUrl(second.mobile)}`)}`}
            alt=''
            srcSet={`${getImgUrl(second.mobile)} 768w, ${getImgUrl(
              second.tablet
            )} 1020w, ${getImgUrl(second.desktop)} 1440w`}
            className='hover:scale-105'
            loading='lazy'
          />
        </div>
      </div>
      <div className='overflow-hidden rounded-md cursor-pointer max-h-96 md:max-h-128 xl:max-h-128 max-w-1/2'>
        <img
          src={`${getImgUrl(`${getImgUrl(first.mobile)}`)}`}
          alt=''
          srcSet={`${getImgUrl(third.mobile)} 768w, ${getImgUrl(
            third.tablet
          )} 1020w, ${getImgUrl(third.desktop)} 1440w`}
          className='hover:scale-105'
          loading='lazy'
        />
      </div>
    </div>
  );
};
export default Gallery;
