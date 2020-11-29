import Popup from '../components/popup.js';


export default class PopupWithImage extends Popup {
	constructor(popup) {
    super(popup);
  }

  open(image, text){
    this._popup.querySelector('.popup-pic__image').src = image;
    this._popup.querySelector('.popup-pic__text').textContent = text;
    this._setEventListeners()
    super.open()
  }

  _setEventListeners(){ //пришлось реализовавыть так, потмоу что кнопка popup-pic не кнопка popup-form, и код клика по оверлею так же по сути дублируется
    this._closeButtonPic = this._popup.querySelector(".popup-pic__close-button-pic"); //если переношу все в класс popup, чтобы ужать код мне сыпет ошибками
    this._closeButtonPic.addEventListener("click", () =>{
      this.close();
    });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}
