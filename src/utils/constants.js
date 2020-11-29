export const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://images.unsplash.com/photo-1587636226998-c09c3aaf2790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=631&q=80",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const formObj = {
  formSelector: '.form',
  inputSelector: '.form__name',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_active',
  inputErrorClass: 'form_name_error',
  errorClass: 'form__error',
}

export const editButton = document.querySelector(".profile__edit-button");
export const profileName = document.querySelector(".profile__name");
export const profileSubInfo = document.querySelector(".profile__sub-info");
export const addButton = document.querySelector(".profile__add-button");

export const formElement = document.querySelector(".form");
export const nameInput = document.querySelector(".form__name_top");
export const jobInput = document.querySelector(".form__name_bottom");


export const formElementAdd = document.querySelector(".form-add")
export const elementName = document.querySelector(".form__name_top_add-name");
export const elementPlace = document.querySelector(".form__name_bottom_add-place");

export const sectionElements = document.querySelector(".elements");


