import Popup from '../components/popup.js';

export default class PopupWithImage extends Popup {
	constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector('.popup-pic__image');
    this._text = this._popup.querySelector('.popup-pic__text');
  }

  open(text, image){
    this._image.src = image;
    this._text.textContent = text;
    this._image.alt = text; //так все работает, но меня смутило изначально, что оно не ставится у верстку, по крайней мере у меня
                            //при создании карточки поля alt остаются пустыми, и я не стал это добавлять в проект на ревью

    super.open()
  }

}
