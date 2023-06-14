const Header = ({ category }) => {
  return (
    <header className='flex items-center justify-center h-28 md:h-36 section-margin section-padding bg-cusBlack'>
      <h2 className='text-3xl font-semibold tracking-wider text-white uppercase md:text-4xl'>
        {category}
      </h2>
    </header>
  );
};
export default Header;
