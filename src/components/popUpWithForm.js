import Popup from '../components/popup.js';
import { formObj } from '../utils/constants.js';


export default class PopUpWithForm extends Popup {
  constructor (popup, {handleFormSubmit}) {
    super(popup)
      this._selectedForm = this._popup.querySelector('.form');
      this._saveButton = this._selectedForm.querySelector('.form__button')
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
      this._handleFormSubmit(inputData)
    });

    super.setEventListeners();
  }



  close(){
    this._selectedForm.reset();

    super.close()
  }
}
