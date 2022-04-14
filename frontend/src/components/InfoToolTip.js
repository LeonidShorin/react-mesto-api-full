import { useEffect } from 'react';

function InfoToolTip({ isSuccess, isOpen, onClose }) {

  useEffect(() => {
    if (!isOpen) return;
    function handleEscClose(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [isOpen, onClose])

  return (
    <div className={`popup ${isOpen && 'popup_show'}`}>
      <div className={'popup__window'}>
        <button type={'button'} className={`popup__close-button`} onClick={onClose}>
          { }
        </button>
        <div className={'popup__form popup__form_type_infotooltip'}>
          <div className={`popup__entry-icon ${isSuccess ? 'popup__entry-icon_type_ok' : 'popup__entry-icon_type_wrong'}`}>
            { }
          </div>
          <h2 className={'popup__title_type_infotooltip'}>
            {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}
          </h2>
        </div>
      </div>
    </div>)

}

export default InfoToolTip