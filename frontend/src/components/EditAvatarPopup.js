import PopupWithForm from './PopupWithForm';
import useInput from '../utils/formValidator';
import { useEffect, useMemo } from 'react';

function EditAvatarPopup({ onLoading, isOpen, onUpdateAvatar, onClose }) {
  const isLoading = onLoading;
  const initialValues = useMemo(() => {
    return { link: '' }
  }, [])
  const avatar = useInput(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatar.values.link);
  }

  useEffect(() => {
    !isOpen && avatar.resetForm();
  }, [isOpen])

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
    <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isOpen}
      onClose={onClose} onSubmit={handleSubmit} isLoading={isLoading} isValid={avatar.isValid} buttonText={'Сохранить'} loadingText={'Сохранение...'}
    >
      <fieldset className={'popup__fieldset'}>
        <input type="url" className="popup__input popup__input_type_avatar" name="link"
          onChange={avatar.handleChange}
          value={avatar.values.link}
          placeholder="Ссылка на картинку"
          id="avatar-link"
          required
        />
        <span className={`popup__input-error popup__input-error_active avatar-link-error`}>
          {avatar.errors.link}
        </span>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;