let popUpOpenButton = document.querySelector(".profile__edit-button");
let popUpCloseButton = document.querySelector(".form__close-button");
let popUp = document.querySelector(".popup");

let popUpToggle = () => {
  popUp.classList.toggle("popup_is-opened");
}

popUpOpenButton.addEventListener("click", popUpToggle);
popUpCloseButton.addEventListener("click", popUpToggle);

let saveButtonPopUpClose = document.querySelector('.form__button')

let popUpClose = () => {
  popUp.classList.remove("popup_is-opened");
}
saveButtonPopUpClose.addEventListener("click", popUpClose);

let formElement = document.querySelector('.form');

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameInput =  document.querySelector('.form__name');
    let jobInput = document.querySelector('.form__subname');

    let profileName = document.querySelector('.profile__name');
    let profileSubInfo = document.querySelector('.profile__sub-info');

    profileName.textContent = nameInput.value;
    profileSubInfo.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);


