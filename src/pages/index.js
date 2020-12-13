import './index.css';
import { Card } from '../components/card.js';
import { FormValidator } from '../components/formValidator.js';
import Section from '../components/section.js';
import PopupWithForm from '../components/popupWithForm.js';
import PopupWithImage from '../components/popupWithImage.js';
import PopupWithSubmit from '../components/popupWithSubmit.js';
import { UserInfo } from '../components/UserInfo.js';
import { formObj, popUpPicObj, userObject, apiObj } from '../utils/constants.js';
import { Api } from '../components/api';

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const avatarChangeButton = document.querySelector(".profile__pic-edit");

const formElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__name_top");
const jobInput = document.querySelector(".form__name_bottom");

const formElementAdd = document.querySelector(".form-add")
const formProfile = document.querySelector(".form-profile");

const sectionElements = document.querySelector(".elements");

const submitButtonThenLoading = document.querySelectorAll('.form__button_loading')
const submitButtonCommon = document.querySelectorAll('.form__button')

const renderLoading = (isLoading) => {
  if (isLoading) {
    submitButtonThenLoading.forEach((button) => {
      button.classList.add('form__button_loading_is-active');
    })
    submitButtonCommon.forEach((button) => {
      button.classList.add('form__button_is-hidden');
    })
  } else {
    submitButtonThenLoading.forEach((button) => {
      button.classList.remove('form__button_loading_is-active');
    })
    submitButtonCommon.forEach((button) => {
      button.classList.remove('form__button_is-hidden');
    })
  }
}

const api = new Api(apiObj);

api.getCards() //promise.all?
  .then((item) => {
    cardsSectionRender.renderItems(item.reverse());
  })
  .catch(err => console.error(err))

let userDataFromServer = null;

api.getUser()
  .then(res => {
    userDataFromServer = res;
    userInfo.setUserInfo(res);
    userInfo.setUserPic(res)
  })
  .catch(err => console.error(err))

const cardsSectionRender = new Section({
  renderer: (item) => {
    createCard(item, userDataFromServer)
  }
},
  sectionElements
);

const createCard = (item, user) => {
  const card = new Card({
    item,
    user,

    handleCardClick: () => {
    popupWithImage.open(item.name, item.link);
    },

    handleCardDelete: (cardId) => {
      popupWithSubmit.setSubmitAction(() => {
        api.deleteCard(cardId)
          .then(() => {
            card.deleteCard()
          })
          .catch(err => console.error(err))
      })
        popupWithSubmit.open()
    },

    handleCardLikeClick: () => {
      const likeRequest = card.isLiked() ? api.dislikeCard(card._cardId) : api.likeCard(card._cardId);
      likeRequest
        .then((res) => {
          card.setLikes(res)
        })
        .catch(err => console.error(err))
    },

  }, '.template');
  const cardElement = card.generateCard();
  cardsSectionRender.addItemPrepend(cardElement);
}

const userInfo = new UserInfo(userObject);

const popupWithFormProfile = new PopupWithForm('.popup',
  {handleFormSubmit: (inputData) => {
    renderLoading(true) //работает
    api.editProfile(inputData)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .catch(err => console.error(err))
      .finally(() => {
        renderLoading(false) //работает
        popupWithFormProfile.close()
      })
  }}
);

const popupProfileEditAvatar = new PopupWithForm('.popup-profile',
    {handleFormSubmit: (inputData) => {
      renderLoading(true)
      api.changeUserPic(inputData.avatar)
        .then((res) => {
          userInfo.setUserPic(res);
        })
        .catch(err => console.error(err))
        .finally(() =>{
          renderLoading(false);
          popupProfileEditAvatar.close();
        })
    }
});

const popupWithFormAdd = new PopupWithForm('.popup-add',
  {handleFormSubmit: (data) => {
    renderLoading(true)
    api.addCard(data)
      .then(cardData => {
        createCard(cardData, userDataFromServer);
      })
      .catch(err => console.error(err))
      .finally(() => {
        renderLoading(false)
        popupWithFormAdd.close();
      })
  }
});

const popupWithImage = new PopupWithImage('.popup-pic', popUpPicObj);

const popupWithSubmit = new PopupWithSubmit('.popup-delete')

const formValidator = new FormValidator(formObj, formElement);
const formValidatorAdd = new FormValidator(formObj, formElementAdd);
const formValidatorProfile = new FormValidator(formObj, formProfile);

formValidatorProfile.enableValidation()
formValidator.enableValidation();
formValidatorAdd.enableValidation();

popupWithImage.setEventListeners();
popupWithFormProfile.setEventListeners();
popupWithFormAdd.setEventListeners();
popupProfileEditAvatar.setEventListeners();
popupWithSubmit.setEventListeners();

const openProfilePopup = () => {
  const userProfileInfo = userInfo.getUserInfo() //подтягивать данные с сервера
  nameInput.value = userProfileInfo.name;
  jobInput.value = userProfileInfo.about;
  popupWithFormProfile.open();
}

avatarChangeButton.addEventListener('click', () => popupProfileEditAvatar.open())
editButton.addEventListener('click', () => openProfilePopup());
addButton.addEventListener('click', () => popupWithFormAdd.open());


