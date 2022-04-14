import React from 'react';

function MenuMobile(props) {
  return (
    <div className={`menu-mobile__position ${props.isShowMenu}`}>
      <menu className='menu-mobile'>
        <span className='header__emailtag'>{props.email}</span>
        <button className='header__link menu-mobile__exit' onClick={props.onLogOut}>Выйти</button>
      </menu>
    </div>
  );
}

export default MenuMobile;