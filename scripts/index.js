import { Card } from './card.js';
import { FormValidator } from './formValidator.js'
import { initialCards } from './constants.js';

const editButton = document.querySelector(".profile__edit-button");
const popUpCloseButton = document.querySelector(".form__close-button");
const popUp = document.querySelector(".popup");

const formElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__name_top");
const jobInput = document.querySelector(".form__name_bottom");

const profileName = document.querySelector(".profile__name");
const profileSubInfo = document.querySelector(".profile__sub-info");

const formElementAdd = document.querySelector(".form-add")
const popUpAdd = document.querySelector(".popup-add");
const addButton = document.querySelector(".profile__add-button");
const popUpCloseButtonAdd = document.querySelector(".form__close-button_add");

const popUpPic = document.querySelector(".popup-pic");
const popUpPicCloseButton = document.querySelector(".popup-pic__close-button-pic");

const sectionElements = document.querySelector(".elements");

const elementName = document.querySelector(".form__name_top_add-name");
const elementPlace = document.querySelector(".form__name_bottom_add-place");

const popUpSaveButton = document.querySelector(".form__button_add");

const popups = Array.from(document.querySelectorAll(".popup"));

const createCards = (item, end) => {
  const card = new Card(item, '.template', popUpPic);
  const cardElement = card.generateCard();
    if (end === 'prepend') {
      sectionElements.prepend(cardElement);
    } else {
      sectionElements.append(cardElement);
    }
}

initialCards.forEach(createCards);

const openPopup = (popUp) => {
  document.addEventListener("keydown", popUpCloseEsc);
  popUp.classList.add("popup_is-opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubInfo.textContent;
  popUpSaveButton.classList.add("form__button_active");
  popUpSaveButton.disabled = true;
};

const closePopup = (popUp) => {
  popUp.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", popUpCloseEsc);
};

const popupToggleOnOverlay = (popuphimself) => {
  popuphimself.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popuphimself);
    }
  });
};

const popUpCloseEsc = (evt) => {
  const openedPopUp = document.querySelector(".popup_is-opened");
  if (evt.key === "Escape") {
    closePopup(openedPopUp);
  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileSubInfo.textContent = jobInput.value;
  closePopup(popUp);
};

const formSubmitHandlerAdd = (evt) => {
  evt.preventDefault();
  const obj = {  //вот этот
  name: elementName.value,
  link: elementPlace.value
  }
  createCards(obj, 'prepend');
  popUpAdd.querySelector(".form").reset();
  closePopup(popUpAdd);
};

const formObj = {
  formSelector: '.form',
  inputSelector: '.form__name',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_active',
  inputErrorClass: 'form_name_error',
  errorClass: 'form__error',
}

const formValidator = new FormValidator(formObj, formElement) //форма Name/Job
const formValidatorAdd = new FormValidator(formObj, formElementAdd) //форма Place/Pic

formValidator.enableValidation() //валидация формы Name/Job
formValidatorAdd.enableValidation() //валидация формы форма Place/Pic


popups.forEach(popupToggleOnOverlay);

popUpPicCloseButton.addEventListener("click", () => closePopup(popUpPic));
popUpCloseButtonAdd.addEventListener("click", () => closePopup(popUpAdd));
popUpCloseButton.addEventListener("click", () => closePopup(popUp));
addButton.addEventListener("click", () => openPopup(popUpAdd));
editButton.addEventListener("click", () => openPopup(popUp));
formElement.addEventListener("submit", formSubmitHandler);
popUpAdd.addEventListener("submit", formSubmitHandlerAdd);





