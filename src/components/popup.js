import { ESC_KEY, formObj } from "../utils/constants.js"

export default class Popup {
  constructor (popup) {
    this._popup = document.querySelector(popup);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButton = this._popup.querySelector(formObj.buttonClose);
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



}
