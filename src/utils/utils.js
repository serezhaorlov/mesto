  export const loadingButtonState = (state) =>{ //сделал
    if(state) {
      const popupIsOpened = document.querySelector('.popup_is-opened')
      popupIsOpened.querySelector('.form__button').textContent = 'Сохранение...';
    } else {
      const popupIsOpened = document.querySelector('.popup_is-opened')
      popupIsOpened.querySelector('.form__button').textContent = 'Сохранение';
    }
  }

