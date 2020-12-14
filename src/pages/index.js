import './index.css';
import { Card } from '../components/card.js';
import { FormValidator } from '../components/formValidator.js';
import Section from '../components/section.js';
import PopupWithForm from '../components/popupWithForm.js';
import PopupWithImage from '../components/popupWithImage.js';
import PopupWithSubmit from '../components/popupWithSubmit.js';
import { UserInfo } from '../components/UserInfo.js';
import { formObj, popUpPicObj, userObject, apiObj, template,
	popup, popupAdd, popupProfile, popupPic, popupDelete, toggleButtonState } from '../utils/constants.js';
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

const api = new Api(apiObj);

const cards = api.getCards()
const myProfile =api.getUser()
let userDataFromServer = null;

const promises = [cards,myProfile]

Promise.all(promises) //теперь все вроде ок
.then(res => {
  userDataFromServer = res[1];
  userInfo.setUserInfo(res[1]);
  userInfo.setUserPic(res[1]);
  cardsSectionRender.renderItems(res[0].reverse())
})

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

  }, template);
  const cardElement = card.generateCard();
  cardsSectionRender.addItem(cardElement);
}

const userInfo = new UserInfo(userObject);

const popupWithFormProfile = new PopupWithForm(popup,
  {handleFormSubmit: (inputData) => {
    popupWithFormProfile.renderLoading(true)
    api.editProfile(inputData)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .catch(err => console.error(err))
      .finally(() => {
        popupWithFormProfile.renderLoading(false)
        popupWithFormProfile.close()
      })
  }}
);

const popupProfileEditAvatar = new PopupWithForm(popupProfile,
    {handleFormSubmit: (inputData) => {
      popupProfileEditAvatar.renderLoading(true)
      api.changeUserPic(inputData.avatar)
        .then((res) => {
          userInfo.setUserPic(res);
        })
        .catch(err => console.error(err))
        .finally(() =>{
          popupProfileEditAvatar.renderLoading(false);
          popupProfileEditAvatar.close();
        })
    }
});

const popupWithFormAdd = new PopupWithForm(popupAdd,
  {handleFormSubmit: (data) => {
    popupWithFormAdd.renderLoading(true)
    api.addCard(data)
      .then(cardData => {
        createCard(cardData, userDataFromServer);
      })
      .catch(err => console.error(err))
      .finally(() => {
        popupWithFormAdd.renderLoading(false)
        popupWithFormAdd.close();
      })
  }
});

const popupWithImage = new PopupWithImage(popupPic, popUpPicObj);

const popupWithSubmit = new PopupWithSubmit(popupDelete)

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
  formValidator.hideErrors() //Fixed
  toggleButtonState(true)
}

const openCardAddProfile = () => {
  popupWithFormAdd.open()
  formValidatorAdd.hideErrors()

}

const openAvatarPopup = () => {
  popupProfileEditAvatar.open()
  formValidatorProfile.hideErrors()
}

avatarChangeButton.addEventListener('click', () =>openAvatarPopup())
editButton.addEventListener('click', () => openProfilePopup());
addButton.addEventListener('click', () => openCardAddProfile());


