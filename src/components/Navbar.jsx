import logo from '../assets/shared/desktop/logo.svg';
import mobileMenu from '../assets/shared/tablet/icon-hamburger.svg';
import { ReactComponent as CartLogo } from '../assets/shared/desktop/icon-cart.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import Cart from './Cart';
import SingleMenuCategory from './SingleMenuCategory';
import imgHeadphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import imgSpeakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import imgEarphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png';

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const bg = document.querySelector('#bg');

  useEffect(() => {
    if (isMobileMenuOpen) {
      bg.classList.remove('hidden');
      bg.classList.add('block');
    }
    if (!isMobileMenuOpen) {
      bg.classList.remove('block');
      bg.classList.add('hidden');
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className='relative z-20 bg-cusBlack lg:px-40'>
      <div className='flex justify-between px-4 py-7 lg:px-0 border-white/20 border-b-[1px] lg:border-b-2 align-center'>
        {/* MOBILE MENU LOGO */}
        <div
          className='flex flex-col justify-center lg:hidden'
          onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img src={mobileMenu} />
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
                ? `lg:hidden absolute  w-[calc(100vw-0.5rem)] transition duration-500 ease-out bg-white -left-999  top-0 translate-x-999  z-10 pb-10 md:pb-20 rounded-b-md`
                : `lg:hidden  w-[calc(100vw-0.5rem)] transition duration-500 ease-in bg-white -left-999  top-0  absolute z-10 pb-14 md:pb-20 rounded-b-md  `
            }
          >
            <div className='flex flex-col items-center justify-center gap-20 px-6 mt-20 md:gap-6 md:flex-row'>
              <SingleMenuCategory
                img={imgHeadphones}
                productName={'headphones'}
                url={'headphones'}
                setisMobileMenuOpen={setisMobileMenuOpen}
              />
              <SingleMenuCategory
                img={imgSpeakers}
                productName={'speakers'}
                url={'speakers'}
                setisMobileMenuOpen={setisMobileMenuOpen}
              />
              <SingleMenuCategory
                img={imgEarphones}
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
          className='flex align-center md:absolute md:left-20 md:top-6 lg:flex lg:relative lg:top-0 lg:left-0'
        >
          <img src={logo} alt='audiophile logo' />
        </Link>

        {/* NAVIGATION LINKS */}
        <div className='items-center hidden gap-8 text-sm lg:flex lg:mr-16'>
          <NavLinks />
        </div>

        {/* CART LOGO */}

        <div
          className='flex items-center justify-center cursor-pointer'
          onMouseEnter={() => setIsCartHovered(true)}
        >
          <CartLogo
            className='self-center w-6 h-6 fill-white hover:fill-cusOrangeDark justify-self-center'
            onClick={() => setIsCartHovered(!isCartHovered)}
          />
          <Cart
            isCartHovered={isCartHovered}
            setIsCartHovered={setIsCartHovered}
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
