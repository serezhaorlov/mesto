export const formObj = {
  formSelector: '.form',
  inputSelector: '.form__name',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_active',
  inputErrorClass: 'form_name_error',
  formCloseButton: '.form__close-button',
  buttonClose: '#button-close',
  submitButtonLoading: '.form__button_loading'
}

export const userObject = {
  userPic: ".profile__avatar",
  userName: ".profile__name",
  userInfo: ".profile__sub-info",
}

export const apiObj = {
  cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-18/cards', //вынести в объект и подключить через константы
  headers: {
    'authorization': '265b2265-ae2c-4200-8a02-8c26528e2a21',
    "content-type": "application/json"
  },
  myProfileUrl: 'https://mesto.nomoreparties.co/v1/cohort-18/users/me',
}

export const popUpPicObj = {
  popupPicCloseButton: '.popup-pic__close-button-pic',
}

export const ESC_KEY = "Escape"

export const template = ".template";
export const popup = ".popup";
export const popupAdd = ".popup-add";
export const popupProfile = ".popup-profile";
export const popupPic = ".popup-pic";
export const popupDelete = ".popup-delete";





