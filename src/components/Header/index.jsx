import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg'
import BurgerMenu from '../BurgerMenu';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header className='header'>
      <div className='l-container'>
        <div className='l-content'>
          <div className='header__mobile-menu'>
            <BurgerMenu/>
          </div>
          <div className='header__title'>
            <Link to="/">
              <img src={Logo} alt='logo Orchestra' className='header__title__logo'/>
            </Link>
          </div>
          <Navigation/>
        </div>
      </div>
    </header>
  );
};

export default Header;