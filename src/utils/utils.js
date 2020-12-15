export const loadingButtonState = (state) =>{ //сделал
  if(state) {
    const openedButton = document.querySelector('.popup_is-opened .form__button')
    openedButton.textContent = 'Сохранение...'
  } else {
    const openedButton = document.querySelector('.popup_is-opened .form__button')
    openedButton.textContent = 'Сохранение';
  }
}

