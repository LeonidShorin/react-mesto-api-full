import PopupWithForm from './PopupWithForm';
import { useEffect } from 'react';

function ConfirmPopup({ isOpen, onSubmit, onLoading, onClose, card }) {

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(card)
  }

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
    <PopupWithForm name={'confirm'} title={'Вы уверены?'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
      isLoading={onLoading} card={card} buttonText={'Да'} loadingText={'Удаление...'} card={card}
    >
    </PopupWithForm>
  )
}

export default ConfirmPopup;
