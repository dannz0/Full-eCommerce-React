import logo from '../../public/assets/shared/desktop/logo.svg';
import { ReactComponent as Facebook } from '../../public/assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../public/assets/shared/desktop/icon-twitter.svg';
import { ReactComponent as Instagram } from '../../public/assets/shared/desktop/icon-instagram.svg';
import NavLinks from './NavLinks';

const Footer = () => {
  return (
    <footer className='relative flex flex-col items-center md:h-96 bg-cusBlack section-padding '>
      <div className='w-20 h-1 bg-cusOrangeDark md:self-start'></div>
      {/* ORANGE BORDER */}
      <div className='flex flex-col items-center w-full gap-10 px-4 pt-10 mt-16 py-7 md:px-0 md:items-start'>
        {/* COMPANY LOGO */}
        <button
          className='flex'
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        >
          <img src={logo} alt='audiophile logo' loading='lazy' />
        </button>
        {/* NAVIGATION LINKS */}
        <div className='flex flex-col items-center gap-8 text-sm md:flex-row lg:absolute lg:right-24 xl:right-72'>
          <NavLinks />
        </div>
        {/* COMPANY TEXT */}
        <p className='text-sm text-center text-cusGrey/50 md:text-left lg:w-1/2'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        {/* SOCIALS & COPYRIGHT */}
        <div className='flex flex-col w-full gap-6 md:flex-row md:justify-between'>
          <p className='text-sm font-semibold text-center lg:mt-6 text-cusGrey/50 md:inline-block'>
            Copyright 2023. &copy; All Rights Reserved. Made by @dannz0 on
            GitHub
          </p>

          <div className='flex justify-center gap-6 md:justify-between lg:absolute lg:right-24 lg:top-56 xl:top-56 xl:right-72'>
            <a href='#' className='social-links'>
              <Facebook className='hover:fill-cusOrangeDark' />
            </a>
            <a href='#' className='social-links'>
              <Twitter className='hover:fill-cusOrangeDark' />
            </a>
            <a href='#' className='social-links'>
              <Instagram className='hover:fill-cusOrangeDark' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
