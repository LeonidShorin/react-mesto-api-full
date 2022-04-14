import PopupWithForm from './PopupWithForm.js';
import useInput from '../utils/formValidator.js';
import { useEffect, useMemo } from 'react';

function AddPlacePopup({ onLoading, isOpen, onAddPlace, onClose }) {
  const initialValues = useMemo(() => {
    return { name: '', link: '' }
  }, [])
  const validation = useInput(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(validation.values.name, validation.values.link);
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

  useEffect(() => {
    !isOpen && validation.resetForm();
  }, [isOpen])

  return (
    <PopupWithForm name={'card'} title={'Новое место'} isOpen={isOpen}
      onClose={onClose} onSubmit={handleSubmit} isValid={validation.isValid} isLoading={onLoading} buttonText={'Создать'} loadingText={'Сохранение...'}
    >
      <fieldset className={'popup__fieldset'}>
        <input type="text" className="popup__input popup__input_type_card" name="name" value={validation.values.name}
          onChange={validation.handleChange} placeholder="Название" id="card" minLength="2" maxLength="20" required
        />
        <span className={`popup__input-error card-error popup__input-error_active`}>
          {validation.errors.name}
        </span>
        <input type="url" className="popup__input popup__input_type_link" name="link" value={validation.values.link} onChange={validation.handleChange}
          placeholder="Ссылка на картинку" id="link" required
        />
        <span className={`popup__input-error link-error popup__input-error_active`}>
          {validation.errors.link}
        </span>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddPlacePopup;