import logo from '../images/logo.svg';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  function openNavBar() {
    props.showMenu('mobile_position1');
  }

  const { pathname } = useLocation();
  const linkText = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;
  const linkPath = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;

  return (
    <header className='header__position'>
      <div className="header">
        <img className="header__logo" src={logo} alt="Место Россия лого" />
        {props.isLoggedIn ? (
          <>
            <div className='header__navigation'>
              <span className='header__emailtag'>{props.email}</span>
              <button className='header__link' onClick={props.onLogOut}>Выйти</button>
            </div>
            <button className={`header__menu ${props.classHeaderMenu}`} onClick={openNavBar}>
              <span />
            </button>
          </>) : (<Link to={linkPath} className="header__link">{linkText}</Link>)
        }
      </div>
    </header>)
}

export default Header