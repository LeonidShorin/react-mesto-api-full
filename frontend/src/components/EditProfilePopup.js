import { useContext, useEffect, useMemo } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import useInput from '../utils/formValidator'

function EditProfilePopup({ onLoading, onClose, onUpdateUser, isOpen }) {
  const currentUser = useContext(CurrentUserContext);
  const initialValues = useMemo(() => ({ name: '', about: '' }), [])
  const validation = useInput(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(validation.values.name, validation.values.about)
  }

  useEffect(() => {
    if (isOpen) {
      validation.setValues((prev) => ({
        ...prev,
        name: currentUser.name,
        about: currentUser.about
      }));
    } else {
      validation.resetForm()
    }
  }, [isOpen, currentUser])

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
    <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}
      isLoading={onLoading} isValid={validation.isValid} buttonText={'Сохранить'} loadingText={'Сохранение...'}
    >
      <fieldset className={'popup__fieldset'}>
        <input type="text" className="popup__input popup__input_type_name" name="name" placeholder="Имя" value={validation.values.name} onChange={validation.handleChange}
          id="nameInput" minLength="2" maxLength="40" required
        />
        <span className={`popup__input-error name-input-error popup__input-error_active`}>{validation.errors.name}
        </span>
        <input type="text" className="popup__input popup__input_type_job" name="about" value={validation.values.about} onChange={validation.handleChange}
          placeholder="О себе" id="about-input" minLength="2" maxLength="200" required
        />
        <span className={`popup__input-error description-input-error popup__input-error_active`}>{validation.errors.about}
        </span>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditProfilePopup;