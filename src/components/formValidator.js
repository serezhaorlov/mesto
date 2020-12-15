export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._input = this._form.querySelector(settings.inputSelector)
    this._inputs = this._form.querySelectorAll(settings.inputSelector)

    this._settings = settings;
  }

  _hideError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    this._input.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
  }

  _showError (input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    this._input.classList.add(this._settings.inputErrorClass);
  }

  _submitButtonState() {
    const stateActive = this._form.querySelector(this._settings.submitButtonSelector);
    if (this._form.checkValidity()) {
      stateActive.classList.remove(this._settings.inactiveButtonClass);
      stateActive.disabled = false;
    } else {
      stateActive.classList.add(this._settings.inactiveButtonClass);
      stateActive.disabled = true;
    }
  }

  _checkInputValidity(input) {
    if (input.checkValidity()) {
      this._hideError(input, input.validationMessage);
    } else {
      this._showError(input);
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const saveButton = this._form.querySelector(this._settings.submitButtonSelector);
    this._submitButtonState(this._form, saveButton);
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._submitButtonState(saveButton);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      })

      this._setEventListeners(this._settings);
    };

    submitButtonBlockState(state) { //утащил все в класс валидации после обсуждения с куратором
      if (state) {
        const stateActive = this._form.querySelector(this._settings.submitButtonSelector);
        stateActive.classList.remove(this._settings.inactiveButtonClass);
        stateActive.disabled = false;
      } else {
        const stateActive = this._form.querySelector(this._settings.submitButtonSelector);
        stateActive.classList.add(this._settings.inactiveButtonClass);
        stateActive.disabled = true;
      }
    }

    hideErrors() {
      this._inputs.forEach(item => {
            this._hideError(item);
        })
    }

}

