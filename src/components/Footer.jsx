import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import facebook from '../assets/shared/desktop/icon-facebook.svg';
import twitter from '../assets/shared/desktop/icon-twitter.svg';
import instagram from '../assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className='relative bg-cusBlack md:px-40'>
      <div className='absolute top-0 w-20 h-1 left-36 bg-cusOrangeDark md:left-40'></div>

      <div className='flex flex-col justify-center gap-10 px-4 pt-10 mt-10 align-center py-7 md:px-0'>
        {/* COMPANY LOGO */}
        <div className='flex self-center md:self-start'>
          <img src={logo} alt='audiophile logo' />
        </div>
        {/* NAVIGATION LINKS */}
        <div className='flex flex-col gap-8 text-sm md:flex-row'>
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
        {/* COMPANY TEXT */}
        <p className='text-sm text-center text-cusGrey/50 md:text-left'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        {/* SOCIALS & COPYRIGHT */}
        <div className='flex flex-col gap-6 md:flex-row md:justify-between'>
          <p className='text-sm font-semibold text-center text-cusGrey/50 md:inline-block'>
            Copyright 2021. All Rights Reserved
          </p>
          <div className='flex justify-center gap-6'>
            <div className='flex justify-center w-6 h-6 align-center'>
              <img src={facebook} alt='facebook logo' />
            </div>
            <div className='flex justify-center w-6 h-6 align-center'>
              <img src={twitter} alt='twitter logo' />
            </div>
            <div className='flex justify-center w-6 h-6 align-center'>
              <img src={instagram} alt='instagram logo' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
