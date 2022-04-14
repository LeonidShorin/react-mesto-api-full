function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  onSubmit,
  isValid,
  isLoading,
  buttonText,
  loadingText,
  children,
}) {

  const isFormValid = isValid ?? true;
  const isButtonDisabled = isLoading || !isFormValid;

  function handleOverlayClose(e) {
    if (e.target === e.currentTarget && isOpen) {
      onClose();
    }
  }

  function SubmitButton() {
    return (<button type="submit"
      className={`popup__save-button
      ${isButtonDisabled && 'popup__save-button_disabled'}
        popup__save-button_type_${name}`}
      disabled={isButtonDisabled}>
      {isLoading ? loadingText : buttonText}
    </button>)
  }
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_show'}`} onClick={handleOverlayClose}>
      <div className="popup__window">
        <button type="button" onClick={onClose} className={`popup__close-button popup__close-button_type_${name}`}
          aria-label={`Кнопка закрытия модального окна ${title}`}>
          { }
        </button>
        <form onSubmit={onSubmit} className={`popup__form popup__form_${name}`} name={name} id={name} noValidate>
          <h2 className={`popup__title ${name === 'update-avatar-form' ? 'popup__title_avatar' : ''}`}>
            {title}
          </h2>
          {children}
          <SubmitButton />
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
