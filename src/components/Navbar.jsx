import logo from '../assets/shared/desktop/logo.svg';
import mobileMenu from '../assets/shared/tablet/icon-hamburger.svg';
import cartLogo from '../assets/shared/desktop/icon-cart.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavLinks from './NavLinks';
import Cart from './Cart';

const Navbar = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);

  return (
    <nav
      className='relative bg-cusBlack lg:px-40'
      onScroll={() => console.log('scroll')}
    >
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
          className={
            isMobileMenuOpen
              ? `lg:hidden absolute w-screen transition duration-500 ease-out bg-red-200 -left-999 h-128 top-20 translate-x-999 md:h-128 md:top-16`
              : `lg:hidden absolute w-screen transition duration-500 ease-in bg-red-200 -left-999 h-128 top-20 md:h-128 md:top-16`
          }
        >
          {/* !! TODO */}
        </div>

        {/* COMPANY LOGO */}
        <Link
          to={'/'}
          className='flex align-center md:absolute md:left-20 md:top-6 lg:flex lg:relative lg:top-0 lg:left-0'
        >
          <img src={logo} alt='audiophile logo' />
        </Link>

        {/* NAVIGATION LINKS */}
        <div className='items-center hidden gap-8 text-sm lg:flex'>
          <NavLinks />
        </div>

        {/* CART LOGO */}

        <div
          className='flex items-center justify-center cursor-pointer lg:pl-20 '
          onMouseEnter={() => setIsCartHovered(true)}
        >
          <img
            src={cartLogo}
            className='self-center w-5 h-5 justify-self-center lg:w-6 lg:h-6'
            onClick={() => setIsCartHovered(true)}
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
