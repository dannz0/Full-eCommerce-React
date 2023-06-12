import imgHeadphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import imgSpeakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import imgEarphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import SingleCategory from './SingleMenuCategory';

const MenuCategories = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-20 section-padding section-margin md:flex-row md:gap-4 lg:gap-20'>
      <SingleCategory
        img={imgHeadphones}
        productName={'headphones'}
        url={'headphones'}
      />
      <SingleCategory
        img={imgSpeakers}
        productName={'speakers'}
        url={'speakers'}
      />
      <SingleCategory
        img={imgEarphones}
        productName={'earphones'}
        url={'earphones'}
      />
    </section>
  );
};
export default MenuCategories;
