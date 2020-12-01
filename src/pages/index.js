import './index.css';
import { Card } from '../components/card.js';
import { FormValidator } from '../components/formValidator.js';
import Section from '../components/section.js';
import PopupWithForm from '../components/popupWithForm.js';
import PopupWithImage from '../components/popupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import { initialCards, formObj, popUpPicObj } from '../utils/constants.js'

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const formElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__name_top");
const jobInput = document.querySelector(".form__name_bottom");

const formElementAdd = document.querySelector(".form-add")

const sectionElements = document.querySelector(".elements");

const cardBuilder = (item) => {  //я не просто так оставил лишний код при создании карточек и добавлении отдельной карточки, так как методы добавления карточек различались. у секции это был
  const card = new Card({item, handleCardClick: () => { //addItemAppend(), у блока добавления карточки addItemPrepend(), так как в эти методы передавался cardElement,
    const popupWithImage = new PopupWithImage('.popup-pic', popUpPicObj); //а его вытащить из функции не могу...
    popupWithImage.open(item.name, item.url);                             //пришлось "зареверсить" массив с карточек, чтобы использовать только prepend
    popupWithImage.setEventListeners()
    }
  }, '.template');
  const cardElement = card.generateCard();
  cardsList.addItemPrepend(cardElement);

}

const cardsList = new Section({
  data: initialCards.reverse(), //this
  renderer: (item) => {
    cardBuilder(item);
  }
},
  sectionElements
);

const userInfo = new UserInfo({
  userName: ".profile__name",
  userInfo: ".profile__sub-info"
});

const popupWithFormProfile = new PopupWithForm('.popup',
  {handleFormSubmit: (inputData) => {
    userInfo.setUserInfo(inputData);
  }}
);


const popupWithFormAdd = new PopupWithForm('.popup-add',
  {handleFormSubmit: (item) => {
    cardBuilder(item);
  }
});

const formValidator = new FormValidator(formObj, formElement);
const formValidatorAdd = new FormValidator(formObj, formElementAdd);

cardsList.renderItems();

formValidator.enableValidation();
formValidatorAdd.enableValidation();

popupWithFormProfile.setEventListeners();
popupWithFormAdd.setEventListeners();


const openProfilePopup = () => {
  const userProfileInfo = userInfo.getUserInfo() //поправил)
  nameInput.value = userProfileInfo.name;
  jobInput.value = userProfileInfo.comment;
  popupWithFormProfile.open();
}

editButton.addEventListener('click', () => openProfilePopup());
addButton.addEventListener('click', () => popupWithFormAdd.open());




