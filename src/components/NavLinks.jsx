import { Link } from 'react-router-dom';
import { navLinks } from '../assets/data';

const NavLinks = () => {
  return (
    <>
      {navLinks.map((link, i) => {
        return (
          <Link to={link === 'home' ? '/' : link} className='nav-links' key={i}>
            {link}
          </Link>
        );
      })}
    </>
  );
};
export default NavLinks;
