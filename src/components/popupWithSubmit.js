import Popup from './popup.js';

export default class PopupWithSubmit extends Popup {
  constructor (popup) {
    super(popup);
    this._selectedForm = this._popup.querySelector('.form');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }
  setEventListeners () {
    this._selectedForm.addEventListener('submit', (evt) => {
      evt.preventDefault(); //вот тут все работает, если preventDefault убрать, то будет работать, но будет обновляться страница
      this._handleSubmitCallback();
      this.close()
    })

    super.setEventListeners()
  }


}
