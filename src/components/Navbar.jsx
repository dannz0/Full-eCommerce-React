import { ReactComponent as CartLogo } from '../assets/icon-cart.svg';
import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import Cart from './Cart';
import SingleMenuCategory from './SingleMenuCategory';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const bg = document.querySelector('#bg');
  const { isFormSubmitted } = useSelector((state) => state.global);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isCartHovered || isFormSubmitted) return;

    if (isMobileMenuOpen) {
      bg.classList.add('lg:hidden');
      bg.classList.remove('hidden');
    }
    if (!isMobileMenuOpen) {
      bg.classList.add('block');
      bg.classList.add('hidden');
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className='top-0 z-50 shadow-md lg:sticky bg-cusBlack lg:px-24 xl:px-72'>
      <div className='flex justify-between px-7 py-7 lg:px-0 border-white/20 border-b-[1px] lg:border-b-2 align-center'>
        {/* MOBILE MENU LOGO */}
        <div
          className='z-50 flex flex-col justify-center cursor-pointer lg:hidden'
          onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img src={'/assets/shared/tablet/icon-hamburger.svg'} />
        </div>

        {/* MOBILE MENU */}

        <div
          // old bg filter
          className={
            isMobileMenuOpen
              ? `lg:hidden absolute w-screen h-screen -left-999 top-20 translate-x-999 md:top-[4.85rem] z-10 pb-10 md:pb-20 rounded-b-md `
              : `lg:hidden  w-screen  h-screen transition duration-500 -left-999  top-20  absolute z-10 pb-14 md:pb-20 rounded-b-md md:top-[4.85rem] `
          }
        >
          <div
            className={
              isMobileMenuOpen
                ? `lg:hidden absolute  w-[calc(100vw)] transition duration-500 ease-out bg-white -left-999  top-0 translate-x-999  z-10 pb-10 md:pb-20 rounded-b-md `
                : `lg:hidden  w-[calc(100vw-0.5rem)] transition duration-500 ease-in bg-white -left-999  top-0  absolute z-10 pb-14 md:pb-20 rounded-b-md `
            }
          >
            <div className='flex flex-col items-center justify-center gap-20 px-6 mt-20 md:gap-6 md:flex-row'>
              <SingleMenuCategory
                img={
                  '/assets/shared/desktop/image-category-thumbnail-headphones.png'
                }
                productName={'headphones'}
                url={'headphones'}
                setisMobileMenuOpen={setisMobileMenuOpen}
              />
              <SingleMenuCategory
                img={
                  '/assets/shared/desktop/image-category-thumbnail-speakers.png'
                }
                productName={'speakers'}
                url={'speakers'}
                setisMobileMenuOpen={setisMobileMenuOpen}
              />
              <SingleMenuCategory
                img={
                  '/assets/shared/desktop/image-category-thumbnail-earphones.png'
                }
                productName={'earphones'}
                url={'earphones'}
                setisMobileMenuOpen={setisMobileMenuOpen}
              />
            </div>
          </div>
        </div>

        {/* COMPANY LOGO */}
        <Link
          to={'/'}
          className='z-50 flex items-center justify-center md:absolute md:left-20 md:top-7 lg:flex lg:relative lg:top-0 lg:left-0'
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
        >
          <img src={'/assets/shared/desktop/logo.svg'} alt='audiophile logo' />
        </Link>

        {/* NAVIGATION LINKS */}
        <div className='items-center hidden gap-8 text-sm lg:flex lg:mr-16'>
          <NavLinks />
        </div>

        {/* CART LOGO */}
        <div
          className='z-50 flex items-center justify-center cursor-pointer'
          onMouseEnter={() => setIsCartHovered(true)}
        >
          {cart.length > 0 && (
            <div className='flex justify-center items-center text-white text-xs absolute w-5 h-5 rounded-full right-[1.2rem] lg:right-[5.5rem] xl:right-[17.5rem] top-5 bg-cusOrangeDark'>
              {cart.length}
            </div>
          )}
          <CartLogo
            className='self-center w-6 h-6 fill-white hover:fill-cusOrangeDark justify-self-center'
            onClick={() => setIsCartHovered(!isCartHovered)}
          />
          <Cart
            isCartHovered={isCartHovered}
            setIsCartHovered={setIsCartHovered}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
