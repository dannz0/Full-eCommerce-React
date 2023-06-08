import logo from '../assets/shared/desktop/logo.svg';
import mobileMenu from '../assets/shared/tablet/icon-hamburger.svg';
import cartLogo from '../assets/shared/desktop/icon-cart.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);

  return (
    <nav className='relative bg-cusBlack lg:px-40'>
      <div className='flex justify-between px-4 py-7 lg:px-0 border-white/20 border-b-[1px] lg:border-b-4 align-center'>
        {/* MOBILE MENU LOGO */}
        <div
          className='flex flex-col justify-center lg:hidden'
          onClick={() => setisMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img src={mobileMenu} />
        </div>

        {/* MOBILE MENU */}

        <div
          className={
            isMobileMenuOpen
              ? `lg:hidden absolute w-screen transition duration-500 ease-out bg-red-200 -left-999 h-128 top-20 translate-x-999 md:h-80 md:top-16`
              : `lg:hidden absolute w-screen transition duration-500 ease-in bg-red-200 -left-999 h-128 top-20 md:h-80 md:top-16`
          }
        >
          {/* !! TODO */}
        </div>

        {/* COMPANY LOGO */}
        <div className='flex align-center md:absolute md:left-20 md:top-6 lg:flex lg:relative lg:top-0 lg:left-0'>
          <img src={logo} alt='audiophile logo' />
        </div>

        {/* NAVIGATION LINKS */}
        <div className='hidden gap-8 text-sm lg:flex'>
          <Link
            to={'/'}
            className='self-center tracking-widest text-white uppercase hover:text-cusOrangeDark'
          >
            home
          </Link>
          <Link
            to={'/headphones'}
            className='self-center tracking-widest text-white uppercase hover:text-cusOrangeDark'
          >
            headphones
          </Link>

          <Link
            to={'/speakers'}
            className='self-center tracking-widest text-white uppercase hover:text-cusOrangeDark'
          >
            speakers
          </Link>

          <Link
            to={'/earphones'}
            className='self-center tracking-widest text-white uppercase hover:text-cusOrangeDark'
          >
            earphones
          </Link>
        </div>

        {/* CART LOGO */}
        <div className='flex justify-center cursor-pointer align-center lg:pl-20'>
          <img
            src={cartLogo}
            className='self-center w-4 h-4 justify-self-center lg:w-5 lg:h-5'
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
