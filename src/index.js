console.log('Hello, World!')
import '../styles/index.css';
import { Card } from '../components/card.js';
import { FormValidator } from '../pages/formValidator.js'
import Section from '../components/section.js';
import PopupWithForm from '../components/popupWithForm.js';
import { UserInfo } from '../components/UserInfo.js'

import {
	initialCards,
	formElement,
	formElementAdd,
	sectionElements,
	elementName,
	elementPlace,
	editButton,
  addButton,
  formObj,
  nameInput,
  jobInput
} from '../utils/constants.js'

const cardsList = new Section({
  data: initialCards.reverse(), //вроде костыль, но по-другому разобраться не выходит(
  renderer: (item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();

    cardsList.addItem(cardElement, 'prepend');
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
  {handleFormSubmit: () => {
    const obj = {
      name: elementName.value,
      link: elementPlace.value
      }
    const card = new Card(obj, '.template');
    const cardElement = card.generateCard();

    cardsList.addItem(cardElement, 'append');
  }
});

const formValidator = new FormValidator(formObj, formElement);
const formValidatorAdd = new FormValidator(formObj, formElementAdd);

cardsList.renderItems();

formValidator.enableValidation();
formValidatorAdd.enableValidation();

popupWithFormProfile.setEventListeners();
popupWithFormAdd.setEventListeners();


const openfunc = () => {
  nameInput.value = userInfo.getUserInfo().name; //добавил константу с селектором верхнего и нижнего полей из constants и присвоил им значения
  jobInput.value = userInfo.getUserInfo().comment;  //возвращаемого getUserInfo() объектов
  popupWithFormProfile.open();
}


editButton.addEventListener('click', () => openfunc());
addButton.addEventListener('click', () => popupWithFormAdd.open());




