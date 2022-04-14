// переменные профиль
export const profile = document.querySelector('.profile');
export const profilePopup = '.popup_type_profile';
export const profilePopupSel = document.querySelector(profilePopup);
export const profileForm = profilePopupSel.querySelector('.popup__form_profile');
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
export const nameInput = profileForm.querySelector('.popup__input_type_name');
export const jobInput = profileForm.querySelector('.popup__input_type_job');
export const editButton = profile.querySelector('.profile__edit-button');

// переменные аватар
export const avatarPopup = '.popup_type_avatar';
export const avatarForm = document.querySelector('.popup__form_avatar');
export const updateAvatarButton = profile.querySelector('.profile__avatar-block');
export const avatarPictureSelector = '.profile__avatar';

// переменные карточки
export const newPlaceButton = profile.querySelector('.profile__add-button');
export const cardPopup = '.popup_type_card';
export const cardPopupSel = document.querySelector(cardPopup);
export const cardForm = cardPopupSel.querySelector('.popup__form_card');
export const cardsContainer = '.elements';

// остальные поп-апы
export const imagePopup = '.popup_type_image';
export const confirmationPopup = '.popup_type_confirmation';

// Template-элемент карточки
export const cardElementTemplate = '#element__template';

// классы валид
export const validObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active',
  errorSelector: '.popup__input-error'
};