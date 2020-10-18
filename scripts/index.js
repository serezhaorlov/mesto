const editButton = document.querySelector('.profile__edit-button');
const popUpCloseButton = document.querySelector('.form__close-button');
const popUp = document.querySelector('.popup');

const formElement = document.querySelector('.form');
const nameInput =  document.querySelector('.form__name_top');
const jobInput = document.querySelector('.form__name_bottom');

const profileName = document.querySelector('.profile__name');
const profileSubInfo = document.querySelector('.profile__sub-info');

const PopUpAdd = document.querySelector('.popup-add')
const addButton = document.querySelector('.profile__add-button')
const popUpCloseButtonAdd = document.querySelector('.form__close-button_add')

const popUpPic = document.querySelector('.popup-pic');
const popUpPicCloseButton = document.querySelector('.popup-pic__close-button-pic');

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
  picOpenPls.addEventListener('click', () => {
    popUpPicImage.src = data.link;
    popUpPicText.innerText = data.name;
    openPopup(popUpPic)}); //поправил открытие попапов единой функцией, так прикольней вышло, спасибо!)
  return card;
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
    elementPlace.value = '' //здесь странности, карточка сохраняется, но не закрывается попап при применении .reset();
    openPopup(PopUpAdd);    //планирую узнать в чате группы, может кто сталкивался
  });                       //вообще насколько я понял, достаточно такой записи: elementName.reset();
                            //но оно опять же не работает, попробовал еще так elementName.value.reset()
                            //и elementName.value = elementName.reset(), все тщетно(

const openPopup = (popUp) => {
  popUp.classList.toggle('popup_is-opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileSubInfo.textContent; // в прошлом ревью видимо хотели чтобы я попрактиковался с if))
}

const formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubInfo.textContent = jobInput.value;
    openPopup(popUp);
}

renderCards();



popUpPicCloseButton.addEventListener('click', () => openPopup(popUpPic));
popUpCloseButtonAdd.addEventListener('click', () => openPopup(PopUpAdd));
addButton.addEventListener('click', () => openPopup(PopUpAdd));
editButton.addEventListener('click',() => openPopup(popUp));
popUpCloseButton.addEventListener('click',() => openPopup(popUp));
formElement.addEventListener('submit', formSubmitHandler);



