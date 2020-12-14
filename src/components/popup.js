import { ESC_KEY, formObj } from "../utils/constants.js"

export default class Popup {
  constructor (popup) {
    this._popup = document.querySelector(popup);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButton = this._popup.querySelector(formObj.buttonClose);
    this._submitPreLoad = this._popup.querySelector(formObj.submitButtonSelector);
    this._submitLoad = this._popup.querySelector(formObj.submitButtonLoading);
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add("popup_is-opened");
  };

  close() {
    document.removeEventListener('keydown', this._handleEscClose)
    this._popup.classList.remove("popup_is-opened");
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", () =>{
      this.close();
    });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }

  _handleEscClose(evt) {
    if (evt.key === ESC_KEY) {
      this.close();
    }
  }

  renderLoading(isLoading){ // очень надеюсь, что такая реализация легитимна)
    if (isLoading) {        // если я это делаю в индексе, то у меня работает только с одной кнопкой, которая в profileEdit, все остальные не цеплялись
      this._submitLoad.classList.add('form__button_loading_is-active'); //и  ярешил делал через forEach, потому что нужно было выбирать все кнопки
      this._submitPreLoad.classList.add('form__button_is-hidden');  //почему-то мне показалось, что лезть с этим в класс не лучший выход
    } else {
      this._submitLoad.classList.remove('form__button_loading_is-active');
      this._submitPreLoad.classList.remove('form__button_is-hidden');
    }
  }

}
