import React from 'react';
import close from '../images/close_icon.svg';

function ButtonClose(props) {
  return (
    <img className="button popup__close" onClick={props.closeHandler} src={close} alt="Закрыть" />
  );
}

export default ButtonClose;
