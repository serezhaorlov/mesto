import Popup from '../components/popup.js';

export default class PopupWithImage extends Popup {
	constructor(popup) {
    super(popup);
    this.image = this._popup.querySelector('.popup-pic__image');
    this.text = this._popup.querySelector('.popup-pic__text');
  }

  open(text, image){
    this.image.src = image;
    this.text.textContent = text;
    super.open()
  }

  //я сделал выбор всех кнопок закрытия по id, и теперь нужны нет в дублировании кода вообще.
}
