import logo from '../assets/shared/desktop/logo.svg';
import { ReactComponent as Facebook } from '../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Twitter } from '../assets/shared/desktop/icon-twitter.svg';
import { ReactComponent as Instagram } from '../assets/shared/desktop/icon-instagram.svg';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='relative flex flex-col items-center bg-cusBlack md:px-10 lg:px-40 '>
      <div className='w-20 h-1 bg-cusOrangeDark md:self-start'></div>
      {/* ORANGE BORDER */}
      <div className='flex flex-col items-center w-full gap-10 px-4 pt-10 mt-10 py-7 md:px-0 md:items-start'>
        {/* COMPANY LOGO */}
        <Link to={'/'} className='flex'>
          <img src={logo} alt='audiophile logo' />
        </Link>
        {/* NAVIGATION LINKS */}
        <div className='flex flex-col items-center gap-8 text-sm md:flex-row lg:absolute lg:right-48'>
          <NavLinks />
        </div>
        {/* COMPANY TEXT */}
        <p className='text-sm text-center text-cusGrey/50 md:text-left'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        {/* SOCIALS & COPYRIGHT */}
        <div className='flex flex-col w-full gap-6 md:flex-row md:justify-between'>
          <p className='text-sm font-semibold text-center text-cusGrey/50 md:inline-block'>
            Copyright 2023. All Rights Reserved
          </p>

          <div className='flex justify-center gap-6 md:justify-between lg:absolute lg:right-48 lg:top-52 xl:top-48'>
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
