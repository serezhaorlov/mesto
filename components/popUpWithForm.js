import Popup from '../components/popup.js';
export default class PopUpWithForm extends Popup {
  constructor (popup, {handleFormSubmit}) {
    super(popup)
      this._selectedForm = this._popup.querySelector('.form');
      this._handleFormSubmit = handleFormSubmit;
    }

  _getInputValues() {
    this._inputList = this._selectedForm.querySelectorAll('.form__name');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    this._selectedForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputData = this._getInputValues();
      this._handleFormSubmit(inputData);

      this.close();
    });

    super.setEventListeners();
  }

  open() {
    super.open();
    this._saveButton.classList.add("form__button_active"); //выключаю кнопку при повторном открытии попапа, иначе будет возможности оставить поля
    this._saveButton.disabled = true; // профиля пустыми при сохранений, делаю это в форме, потому что в общем классе если сделать, то будет ошибка
  } // связанная с тем, что у popup-pic будет отключаться кнопка, которой там нет))

  close(){
    this._selectedForm.reset();

    super.close()
  }
}
