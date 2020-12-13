export const initialCards = [
  {
    name: "Архыз",
    url:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    url:
      "https://images.unsplash.com/photo-1587636226998-c09c3aaf2790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=631&q=80",
  },
  {
    name: "Иваново",
    url:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg", //пришлось поменять Name на url
  },
  {
    name: "Камчатка",
    url:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    url:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    url:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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




