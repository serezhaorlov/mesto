let popUpOpenButton = document.querySelector(".profile__edit-button");
let popUpCloseButton = document.querySelector(".form__close-button");
let popUp = document.querySelector(".popup");

let formElement = document.querySelector('.form');
let nameInput =  document.querySelector('.form__name_top'); //решил через модификаторы
let jobInput = document.querySelector('.form__name_bottom'); //но логичней сделать по идее и вправду через hasAttribute, я так понимаю, что правильного решения нет и я деалю как мне удобней или все атки рациональней сделать на атрибутах проверку?
let saveButtonPopUpClose = document.querySelector('.form__button')

let profileName = document.querySelector('.profile__name');
let profileSubInfo = document.querySelector('.profile__sub-info');


let popUpToggle = () => {
  popUp.classList.toggle("popup_is-opened");
  if (popUp.classList.contains("popup_is-opened")){
    nameInput.value = profileName.textContent;
    jobInput.value = profileSubInfo.textContent;
  }
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubInfo.textContent = jobInput.value;
    popUpToggle();
}

popUpOpenButton.addEventListener("click", popUpToggle);
popUpCloseButton.addEventListener("click", popUpToggle);
formElement.addEventListener('submit', formSubmitHandler);

