export default class Popup {
  constructor (popup) {
    this._popup = document.querySelector(popup);
    this._saveButton = this._popup.querySelector('.form__button')
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose.bind(this));
    this._popup.classList.add("popup_is-opened");
  };

  close() {
    document.removeEventListener('keydown', this._handleEscClose.bind(this))
    this._popup.classList.remove("popup_is-opened");
  };

  setEventListeners() {
    this._closeButton = this._popup.querySelector(".form__close-button");
    this._closeButton.addEventListener("click", () =>{
      this.close();
    })
    this._popup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });

  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

}
