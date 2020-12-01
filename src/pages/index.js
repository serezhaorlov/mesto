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

const popupWithImage = new PopupWithImage('.popup-pic', popUpPicObj);

const createCard = (item) => {
  const card = new Card({item, handleCardClick: () => {
    popupWithImage.open(item.name, item.url);
    }
  }, '.template');
  const cardElement = card.generateCard();
  cardsList.addItemPrepend(cardElement);

}

const cardsList = new Section({
  data: initialCards.reverse(), //this
  renderer: (item) => {
    createCard(item);
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
    createCard(item);
  }
});

const formValidator = new FormValidator(formObj, formElement);
const formValidatorAdd = new FormValidator(formObj, formElementAdd);

cardsList.renderItems();

formValidator.enableValidation();
formValidatorAdd.enableValidation();

popupWithImage.setEventListeners() //поправил
popupWithFormProfile.setEventListeners();
popupWithFormAdd.setEventListeners();


const openProfilePopup = () => {
  const userProfileInfo = userInfo.getUserInfo()
  nameInput.value = userProfileInfo.name;
  jobInput.value = userProfileInfo.comment;
  popupWithFormProfile.open();
}

editButton.addEventListener('click', () => openProfilePopup());
addButton.addEventListener('click', () => popupWithFormAdd.open());




