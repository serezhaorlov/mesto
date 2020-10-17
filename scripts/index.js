let editButton = document.querySelector('.profile__edit-button');
let popUpCloseButton = document.querySelector('.form__close-button');
let popUp = document.querySelector('.popup');

let formElement = document.querySelector('.form');
let nameInput =  document.querySelector('.form__name_top');
let jobInput = document.querySelector('.form__name_bottom');

let profileName = document.querySelector('.profile__name');
let profileSubInfo = document.querySelector('.profile__sub-info');

let PopUpAdd = document.querySelector('.popup-add')
let addButton = document.querySelector('.profile__add-button')
let popUpCloseButtonAdd = document.querySelector('.form__close-button_add')

let popUpPic = document.querySelector('.popup-pic');
let popUpPicCloseButton = document.querySelector('.popup-pic__close-button-pic');

const popUpPicImage = document.querySelector('.popup-pic__image');
const popUpPicText = document.querySelector('.popup-pic__text');

const template = document.querySelector('.template');
const sectionElements = document.querySelector('.elements');
const elementName = document.querySelector('.form__name_top_add-name');
const elementPlace = document.querySelector('.form__name_bottom_add-place');
const popUpSaveButton = document.querySelector('.form__button_add');

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://images.unsplash.com/photo-1587636226998-c09c3aaf2790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=631&q=80'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const renderCards = () => {
  const items = initialCards.map(element => getItems(element));
  sectionElements.append(...items);
}

const getItems = (data) => {
  const card = template.content.cloneNode(true);
  card.querySelector('.elements__place-name').innerText = data.name;
  card.querySelector('.elements__pic').src = data.link;
  const cardDeleteButton = card.querySelector('.elements__delete-button');
  const likeButton = card.querySelector('.elements__like-button');
  cardDeleteButton.addEventListener('click', removeCard);
  likeButton.addEventListener('click', pressedLike);
  const picOpenPls = card.querySelector('.elements__pic');
  picOpenPls.addEventListener('click', popUpTogglePic(data));
  return card;
}

const popUpTogglePic = (data) => {
  return () => {
    popUpPicImage.src = data.link;
    popUpPicText.innerText = data.name;
    popUpPic.classList.toggle('popup_is-opened');
  }
}

const pressedLike = (event) => {
  event.target.closest('.elements__like-button').classList.toggle('elements__like-button_pressed');
}

const removeCard = (event) => {
  event.target.closest('.elements__item').remove();
}

popUpSaveButton.addEventListener('click', (evt) => {
  evt.preventDefault();
    const item = getItems({
      name: elementName.value,
      link: elementPlace.value
    });
    sectionElements.prepend(item);
    elementName.value = ''
    elementPlace.value = ''
    popUpToggleAdd();
  });

let popUpToggle = () => {
  popUp.classList.toggle('popup_is-opened');
  if (popUp.classList.contains('popup_is-opened')){
    nameInput.value = profileName.textContent;
    jobInput.value = profileSubInfo.textContent;
  }
}

let popUpToggleAdd = () => {
  PopUpAdd.classList.toggle('popup_is-opened');
}

let popUpCloseButoonToggle = () => {
  popUpPic.classList.toggle('popup_is-opened');
}

const formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubInfo.textContent = jobInput.value;
    popUpToggle();
}

renderCards();


popUpPicCloseButton.addEventListener('click', popUpCloseButoonToggle);
popUpCloseButtonAdd.addEventListener('click', popUpToggleAdd);
addButton.addEventListener('click', popUpToggleAdd);
editButton.addEventListener('click', popUpToggle);
popUpCloseButton.addEventListener('click', popUpToggle);
formElement.addEventListener('submit', formSubmitHandler);
