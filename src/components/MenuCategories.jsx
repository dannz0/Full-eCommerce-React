import SingleCategory from './SingleMenuCategory';

const MenuCategories = () => {
  return (
    <section className='flex flex-col items-center justify-between gap-20 section-padding section-margin md:flex-row md:gap-4 lg:gap-20'>
      <SingleCategory
        img={'/assets/shared/desktop/image-category-thumbnail-headphones.png'}
        productName={'headphones'}
        url={'headphones'}
      />
      <SingleCategory
        img={'/assets/shared/desktop/image-category-thumbnail-speakers.png'}
        productName={'speakers'}
        url={'speakers'}
      />
      <SingleCategory
        img={'/assets/shared/desktop/image-category-thumbnail-earphones.png'}
        productName={'earphones'}
        url={'earphones'}
      />
    </section>
  );
};
export default MenuCategories;
