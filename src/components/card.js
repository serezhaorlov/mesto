export class Card {
	constructor({item, user, handleCardClick, handleCardDelete, handleCardLikeClick }, cardSelector) {

    this._card = item;
    this._text = item.name;
    this._image = item.link;
    this._likes = item.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLikeClick = handleCardLikeClick;
    this._cardId = item._id;
    this._ownerId = item.owner._id;
    this._user = user;
    this._userId = user._id;
    this._likesId = item.likes._id
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
    this._element.querySelector('.elements__like-counter').textContent = this._likes.length;
    this._setEventListeners();
    this._checkMayDelete();
    this.setLikes(this._card);
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.elements__pic').addEventListener('click', () => {
      this._handleCardClick();
    });


    this._deleteCardButton = this._element.querySelector('.elements__delete-button')
    this._deleteCardButton.addEventListener('click', () => {
      this._handleCardDelete(this._cardId);
    });

    this._likeButton = this._element.querySelector('.elements__like-button')
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.toggle("elements__like-button_pressed");
      this._handleCardLikeClick(this._card)
      this._like()
    });
  }

    setLikes(card){
    this._likes = card.likes;
    this._element.querySelector('.elements__like-counter').textContent = this._likes.length
    if (this.isLiked()) {
      this._likeButton.classList.add('elements__like-button_pressed')
    } else {
      this._likeButton.classList.remove('elements__like-button_pressed')
    }
  }

  _like() {
    if (this._likeButton.classList.contains("elements__like-button_pressed")){
      this._likes.length += 1
      this._element.querySelector('.elements__like-counter').textContent = this._likes.length
    } else {
      this._likes.length -=1
      this._element.querySelector('.elements__like-counter').textContent = this._likes.length
    }
  }

  isLiked() {
    return this._likes.some(item => item._id === this._userId)
  }

  _checkMayDelete(){
    if (this._ownerId !== this._userId){
      this._deleteCardButton.classList.add('elements__delete-button_unactive')
    }
  }

  deleteCard(){
    this._element.remove();
  }

}

