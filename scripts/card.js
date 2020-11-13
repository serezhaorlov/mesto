export class Card {
	constructor(item, cardSelector, popup) {
    this._text = item.name;
    this._image = item.link;
    this._cardSelector = cardSelector;
    this._popup = popup;
	}

	_getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.elements__pic').src = this._image;
    this._element.querySelector('.elements__place-name').textContent = this._text;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__pic').addEventListener('click', () => {
      this._handleMessageClick();
    });
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.elements__like-button').addEventListener('click', () => {
      this._like();
    });
  }

  _handleMessageClick() {
    this._popup.querySelector('.popup-pic__image').src = this._image;
    this._popup.querySelector('.popup-pic__text').textContent = this._text;
    this._popup.classList.add('popup_is-opened');
  }

  _deleteCard(){
    this._element.remove();
  }

  _like(){
    this._element.querySelector(".elements__like-button")
    .classList.toggle("elements__like-button_pressed");
  };

}

